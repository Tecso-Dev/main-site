// Performance monitoring plugin
export default defineNuxtPlugin(() => {
  if (process.client && 'performance' in window) {
    // Monitor Core Web Vitals
    const sendWebVitals = (metric) => {
      // You can send this data to your analytics service
      console.log(`${metric.name}: ${metric.value}`)
    }

    // First Contentful Paint
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          sendWebVitals({
            name: 'FCP',
            value: entry.startTime,
            delta: entry.startTime
          })
        }
      }
    }).observe({ type: 'paint', buffered: true })

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        sendWebVitals({
          name: 'LCP',
          value: entry.startTime,
          delta: entry.startTime
        })
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true })

    // Cumulative Layout Shift
    let clsValue = 0
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      }
      sendWebVitals({
        name: 'CLS',
        value: clsValue,
        delta: clsValue
      })
    }).observe({ type: 'layout-shift', buffered: true })

    // First Input Delay
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        sendWebVitals({
          name: 'FID',
          value: entry.processingStart - entry.startTime,
          delta: entry.processingStart - entry.startTime
        })
      }
    }).observe({ type: 'first-input', buffered: true })

    // Time to Interactive (approximation)
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        sendWebVitals({
          name: 'TTI',
          value: loadTime,
          delta: loadTime
        })
      }, 0)
    })
  }
})