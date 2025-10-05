export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseURL = config.public.frontendUrl || 'https://tecso.team'
  
  // Static pages with priority and change frequency
  const pages = [
    // Main pages
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/about-us', priority: 0.9, changefreq: 'monthly' },
    { loc: '/service', priority: 0.9, changefreq: 'weekly' },
    { loc: '/contact', priority: 0.8, changefreq: 'monthly' },
    { loc: '/portfolio', priority: 0.8, changefreq: 'weekly' },
    { loc: '/projects', priority: 0.7, changefreq: 'weekly' },
    
    // Farsi pages
    { loc: '/fa/', priority: 0.9, changefreq: 'weekly' },
    { loc: '/fa/about-us', priority: 0.8, changefreq: 'monthly' },
    { loc: '/fa/service', priority: 0.8, changefreq: 'weekly' },
    { loc: '/fa/contact', priority: 0.7, changefreq: 'monthly' },
    
    // Service portfolio pages
    { loc: '/portfolio/style-6/platform-development', priority: 0.8, changefreq: 'monthly' },
    { loc: '/portfolio/style-5/graphic-design', priority: 0.7, changefreq: 'monthly' },
    { loc: '/portfolio/style-4/business-analyses', priority: 0.7, changefreq: 'monthly' },
    { loc: '/portfolio/style-8/seo-services', priority: 0.8, changefreq: 'monthly' },
    { loc: '/portfolio/style-9/ai-services', priority: 0.8, changefreq: 'monthly' },
    { loc: '/portfolio/style-10/infrastructure-security', priority: 0.8, changefreq: 'monthly' },
    { loc: '/portfolio/style-2/education', priority: 0.6, changefreq: 'monthly' },
    { loc: '/portfolio/style-7/mobile', priority: 0.7, changefreq: 'monthly' },
    
    // Blog/Project pages (English and Persian)
    { loc: '/projects/building-scalable-web-applications-vuejs-nuxtjs', priority: 0.6, changefreq: 'monthly', lastmod: '2025-10-01' },
    { loc: '/fa/projects/building-scalable-web-applications-vuejs-nuxtjs', priority: 0.6, changefreq: 'monthly', lastmod: '2025-10-01' },
    { loc: '/projects/ai-integration-modern-business-solutions', priority: 0.6, changefreq: 'monthly', lastmod: '2025-09-15' },
    { loc: '/fa/projects/ai-integration-modern-business-solutions', priority: 0.6, changefreq: 'monthly', lastmod: '2025-09-15' },
    { loc: '/projects/essential-cybersecurity-practices-iranian-businesses', priority: 0.6, changefreq: 'monthly', lastmod: '2025-09-20' },
    { loc: '/fa/projects/essential-cybersecurity-practices-iranian-businesses', priority: 0.6, changefreq: 'monthly', lastmod: '2025-09-20' },
    { loc: '/projects/cross-platform-mobile-development-trends-2025', priority: 0.6, changefreq: 'monthly', lastmod: '2025-08-25' },
    { loc: '/fa/projects/cross-platform-mobile-development-trends-2025', priority: 0.6, changefreq: 'monthly', lastmod: '2025-08-25' },
    { loc: '/projects/user-experience-design-principles-middle-eastern-markets', priority: 0.6, changefreq: 'monthly', lastmod: '2025-08-10' },
    { loc: '/fa/projects/user-experience-design-principles-middle-eastern-markets', priority: 0.6, changefreq: 'monthly', lastmod: '2025-08-10' },
    { loc: '/projects/digital-transformation-strategies-growing-businesses', priority: 0.6, changefreq: 'monthly', lastmod: '2025-07-30' },
    { loc: '/fa/projects/digital-transformation-strategies-growing-businesses', priority: 0.6, changefreq: 'monthly', lastmod: '2025-07-30' }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(page => `  <url>
    <loc>${baseURL}${page.loc}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml')
  setHeader(event, 'cache-control', 'public, max-age=3600, s-maxage=3600')
  
  return sitemap
})