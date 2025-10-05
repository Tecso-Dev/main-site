export default defineNuxtPlugin(() => {
  // Defer non-critical CSS loading for better LCP
  if (process.client) {
    // Load FontAwesome CSS asynchronously
    const fontAwesomeCSS = document.createElement('link')
    fontAwesomeCSS.rel = 'preload'
    fontAwesomeCSS.as = 'style'
    fontAwesomeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    fontAwesomeCSS.onload = () => {
      fontAwesomeCSS.rel = 'stylesheet'
    }
    document.head.appendChild(fontAwesomeCSS)

    // Load Fancybox CSS asynchronously
    const fancyboxCSS = document.createElement('link')
    fancyboxCSS.rel = 'preload'
    fancyboxCSS.as = 'style'
    fancyboxCSS.href = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css'
    fancyboxCSS.onload = () => {
      fancyboxCSS.rel = 'stylesheet'
    }
    document.head.appendChild(fancyboxCSS)

    // Optimize images with Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
            imageObserver.unobserve(img)
          }
        }
      })
    }, {
      rootMargin: '50px'
    })

    // Observe all images with data-src
    setTimeout(() => {
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img)
      })
    }, 100)

    // Preload critical resources for better Core Web Vitals
    const criticalResources = [
      { href: '/images/logo-light.png', as: 'image' },
      { href: '/images/og-tecso-team.webp', as: 'image' },
      { href: '/_nuxt/entry.js', as: 'script' }
    ]

    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource.href
      link.as = resource.as
      if (resource.as === 'image') {
        link.crossOrigin = 'anonymous'
      }
      document.head.appendChild(link)
    })

    // Add resource hints for better performance
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ]

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = domain
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })
  }
})