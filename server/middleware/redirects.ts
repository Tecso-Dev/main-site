export default defineEventHandler((event) => {
  // Only handle requests in production or when FORCE_HTTPS is enabled
  if (process.env.NODE_ENV !== 'production' && !process.env.FORCE_HTTPS) {
    return
  }

  const url = getRequestURL(event)
  const host = getRequestHost(event, { xForwardedHost: true })
  
  // Force HTTPS redirect
  if (url.protocol === 'http:') {
    const httpsUrl = `https://${host}${url.pathname}${url.search}`
    
    return sendRedirect(event, httpsUrl, 301)
  }
  
  // Force canonical domain (www to non-www redirect)
  if (host.startsWith('www.')) {
    const nonWwwHost = host.replace(/^www\./, '')
    const canonicalUrl = `${url.protocol}//${nonWwwHost}${url.pathname}${url.search}`
    
    return sendRedirect(event, canonicalUrl, 301)
  }
  
  // Add security headers
  setResponseHeaders(event, {
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: *.google-analytics.com *.googletagmanager.com; connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com;"
  })
})