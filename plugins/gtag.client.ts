export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const gaId = config.public.googleAnalyticsId;

  // Provide a no-op gtag by default to avoid runtime errors
  const noop = (..._args: any[]) => {};

  // Helper to call window.gtag safely
  const callGtag = (...args: any[]) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag(...args);
    } else if (typeof window !== 'undefined') {
      // queue into dataLayer until gtag is ready
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(args);
    }
  };

  // If GA id is missing or placeholder, just provide noop and exit
  if (!gaId || gaId === 'G-XXXXXXXXXX') {
    nuxtApp.provide('gtag', noop);
    return;
  }

  // Inject GA scripts into head
  useHead({
    script: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}` , async: true },
      {
        // initialize dataLayer and gtag
        children: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${gaId}');`
      }
    ]
  });

  // Provide $gtag for usage via useNuxtApp().$gtag
  nuxtApp.provide('gtag', ((...args: any[]) => callGtag(...args)) as any);
});
