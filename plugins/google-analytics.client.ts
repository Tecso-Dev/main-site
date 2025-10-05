export default defineNuxtPlugin(() => {
  // Google Analytics 4 Configuration
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with actual GA4 Measurement ID
  
  if (process.client && process.env.NODE_ENV === 'production') {
    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    // Initialize gtag function
    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) {
      ;(window as any).dataLayer.push(args)
    }
    
    // Configure Google Analytics
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true,
      anonymize_ip: true,
      allow_ad_personalization_signals: false
    })

    // Track Core Web Vitals for SEO performance monitoring
    const trackWebVitals = () => {
      // Track LCP (Largest Contentful Paint)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(entry.startTime)
          })
        }
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    }

    // Initialize Web Vitals tracking
    trackWebVitals()

    // Track page views for SEO analysis
    const router = useRouter()
    router.afterEach((to) => {
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: to.fullPath,
        page_title: document.title || (to.meta.title as string),
        page_location: window.location.href
      })
    })

    // Track scroll depth for engagement metrics
    let maxScroll = 0
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent
        gtag('event', 'scroll', {
          event_category: 'Engagement',
          event_label: `${scrollPercent}%`,
          value: scrollPercent
        })
      }
    })

    // Make gtag available globally
    ;(window as any).gtag = gtag
  }
})