import { defineNuxtRouteMiddleware, navigateTo } from '#app'

// Global language redirect middleware
// Goals:
// - Default first visit to Persian: redirect "/" -> "/fa/"
// - Allow switching via ?lang=en|fa and remember choice in a cookie
// - Keep paths consistent with preference (remove/add /fa prefix)
export default defineNuxtRouteMiddleware((to) => {
  // Only run for normal navigations
  if (process.server) {
    // no-op: useCookie works SSR too; keep logic shared
  }

  const preferred = useCookie<string | undefined>('preferred_lang', {
    path: '/',
    sameSite: 'lax',
    // 6 months
    maxAge: 60 * 60 * 24 * 180,
  })

  const qLang = (to.query.lang as string | undefined)?.toLowerCase()

  // Helper: remove `lang` from query while preserving others
  const withoutLangQuery = () => {
    const q = { ...(to.query as Record<string, any>) }
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete q.lang
    return q
  }

  const isFaPath = to.path.startsWith('/fa')

  // If explicit lang requested in query, set cookie and normalize path
  if (qLang === 'fa' || qLang === 'en') {
    preferred.value = qLang

    // Compute target path according to requested language
    let targetPath = to.path
    if (qLang === 'en' && isFaPath) {
      // Remove /fa prefix
      targetPath = to.path.replace(/^\/fa(\/|$)/, '/')
    } else if (qLang === 'fa' && !isFaPath) {
      // Add /fa prefix (ensure single slash)
      targetPath = to.path === '/' ? '/fa/' : `/fa${to.path}`
    }

    // If path changed or we have the lang query, navigate without the lang param
    if (targetPath !== to.path || qLang) {
      return navigateTo({ path: targetPath, query: withoutLangQuery(), hash: to.hash }, { redirectCode: 302 })
    }
    return
  }

  // No explicit query: decide by cookie or default
  if (!preferred.value) {
    // First visit: default to FA on root path
    if (to.path === '/' || to.path === '') {
      preferred.value = 'fa'
      return navigateTo({ path: '/fa/' }, { redirectCode: 302 })
    }
    return
  }

  // Enforce path prefix according to preference for consistency
  if (preferred.value === 'fa' && !isFaPath) {
    const targetPath = to.path === '/' ? '/fa/' : `/fa${to.path}`
    return navigateTo({ path: targetPath, query: to.query, hash: to.hash }, { redirectCode: 302 })
  }
  if (preferred.value === 'en' && isFaPath) {
    const targetPath = to.path.replace(/^\/fa(\/|$)/, '/')
    return navigateTo({ path: targetPath, query: to.query, hash: to.hash }, { redirectCode: 302 })
  }
})
