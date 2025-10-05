import { defineNuxtRouteMiddleware, navigateTo } from '#app'

// Global language redirect middleware
// Goals:
// - Default first visit to Persian: redirect "/" -> "/fa/"
// - Allow switching via ?lang=en|fa and remember choice in a cookie
// - Keep paths consistent with preference (add /fa when preferred is fa)
// - Do NOT force redirect away from /fa when preferred is en
export default defineNuxtRouteMiddleware((to) => {
  const preferred = useCookie<'en' | 'fa' | undefined>('preferred_lang', {
    path: '/',
    sameSite: 'lax',
    // 6 months
    maxAge: 60 * 60 * 24 * 180,
  })

  const qLang = (to.query.lang as string | undefined)?.toLowerCase() as 'en' | 'fa' | undefined

  // Helpers
  const withoutLangQuery = () => {
    const q = { ...(to.query as Record<string, any>) }
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete (q as any).lang
    return q
  }

  const isFaPath = to.path === '/fa' || to.path.startsWith('/fa/')
  const stripFa = (path: string) => path.replace(/^\/fa(\/|$)/, '/')
  const addFa = (path: string) => (path === '/' ? '/fa/' : path.startsWith('/fa') ? path : `/fa${path}`)

  // If explicit lang requested in query, set cookie and normalize path
  if (qLang) {
    preferred.value = qLang

    let targetPath = to.path
    if (qLang === 'en' && isFaPath) {
      targetPath = stripFa(to.path)
    } else if (qLang === 'fa' && !isFaPath) {
      targetPath = addFa(to.path)
    }

    if (targetPath !== to.path || 'lang' in (to.query || {})) {
      return navigateTo({ path: targetPath, query: withoutLangQuery(), hash: to.hash }, { redirectCode: 302 })
    }
    return
  }

  // No explicit query: decide by cookie or default
  if (!preferred.value) {
    // First visit: default to FA on root path
    if (to.path === '/' || to.path === '') {
      preferred.value = 'fa'
      return navigateTo({ path: '/fa/', query: withoutLangQuery(), hash: to.hash }, { redirectCode: 302 })
    }
    return
  }

  // Enforce path prefix according to preference for consistency (only for FA)
  if (preferred.value === 'fa' && !isFaPath) {
    const targetPath = addFa(to.path)
    return navigateTo({ path: targetPath, query: to.query, hash: to.hash }, { redirectCode: 302 })
  }

  // preferred EN: do nothing; allow browsing /fa/* explicitly
})
