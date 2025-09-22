export default defineNuxtPlugin(() => {
  // Google Analytics
  const gtag = useGtag();
  
  // Enhanced tracking for SEO
  gtag('config', 'G-XXXXXXXXXX', {
    page_title: document.title,
    page_location: window.location.href,
    custom_map: {
      dimension1: 'page_category',
      dimension2: 'user_type'
    }
  });
  
  // Track page views
  router.afterEach((to) => {
    gtag('config', 'G-XXXXXXXXXX', {
      page_path: to.fullPath,
      page_title: document.title,
      page_location: window.location.href
    });
  });
  
  // Performance tracking
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        gtag('event', 'page_load_time', {
          custom_parameter: perfData.loadEventEnd - perfData.fetchStart
        });
      }, 0);
    });
  }
});