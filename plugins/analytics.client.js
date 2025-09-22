export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const gaId = config.public.googleAnalyticsId;
  const gtag = nuxtApp.$gtag || ((..._args) => {});

  if (!gaId || gaId === 'G-XXXXXXXXXX') {
    // Skip wiring GA if no valid ID is configured
    return;
  }

  if (process.client) {
    // Enhanced tracking for SEO
    gtag('config', gaId, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: { dimension1: 'page_category', dimension2: 'user_type' }
    });

    const router = useRouter();
    // Track page views
    router.afterEach((to) => {
      gtag('config', gaId, {
        page_path: to.fullPath,
        page_title: document.title,
        page_location: window.location.href
      });
    });

    // Performance tracking
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perf = performance.getEntriesByType('navigation')[0];
          if (perf) {
            gtag('event', 'page_load_time', {
              custom_parameter: perf.loadEventEnd - perf.fetchStart
            });
          }
        }, 0);
      });
    }
  }
});