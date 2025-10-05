export default defineNuxtPlugin(() => {
  // Only run on client side and in browser
  if (process.server) return

  const route = useRoute()
  const router = useRouter()

  // Handle canonical URL redirects on client side
  router.beforeEach((to) => {
    // Get current URL
    const currentUrl = window.location
    
    // Check if we're on www subdomain
    if (currentUrl.hostname.startsWith('www.')) {
      const canonicalHost = currentUrl.hostname.replace(/^www\./, '')
      const canonicalUrl = `${currentUrl.protocol}//${canonicalHost}${to.fullPath}`
      
      // Redirect to canonical URL
      window.location.replace(canonicalUrl)
      return false
    }
    
    // Check if we're on HTTP (only in production)
    if (currentUrl.protocol === 'http:' && currentUrl.hostname === 'tecso.team') {
      const httpsUrl = `https://${currentUrl.hostname}${to.fullPath}`
      
      // Redirect to HTTPS
      window.location.replace(httpsUrl)
      return false
    }
  })

  // Set canonical link in head
  useHead({
    link: [
      {
        rel: 'canonical',
        href: computed(() => {
          const baseUrl = 'https://tecso.team'
          return `${baseUrl}${route.fullPath}`
        })
      }
    ]
  })
})