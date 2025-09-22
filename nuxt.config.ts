// https://nuxt.com/docs/api/configuration/nuxt-config
import { addPlugin,createResolver,defineNuxtModule } from '@nuxt/kit'
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		'@nuxt/image',
		'@nuxtjs/device',
		'@nuxtjs/sitemap',
		'@nuxtjs/robots'
	],
	app: {
		baseURL: '/',
		head: {
			title: 'Tecso Team - Digital Agency & Software Development | Iran IT Company',
			titleTemplate: '%s | Tecso Team - Digital Agency Iran',
			htmlAttrs: {
				lang: 'en',
				dir: 'ltr'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
				{ 
					name: 'description', 
					content: 'Tecso Team - Leading Iranian IT company specializing in Platform Development, AI Software, Cybersecurity, Mobile Development, and Digital Marketing. Founded by expert developers Sobhan Azimzadeh (CEO/Vue.js Developer) and team including GoLang specialists serving Iran, Iraq, Turkey, Azerbaijan.' 
				},
				{ 
					name: 'keywords', 
					content: 'Tecso Team, Iran IT company, Sobhan Azimzadeh, Ashkan Maleki, Sajjad Manafi, Platform Development, Vue.js Developer, GoLang Developer, AI Software Programming, Cybersecurity, Mobile Development, Digital Marketing, Iran tech company, Middle East software development, Tehran IT services, UI/UX Design, Backend Development' 
				},
				{ name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'google-site-verification', content: 'your-google-verification-code' },
				{ name: 'msvalidate.01', content: 'your-bing-verification-code' },
				
				// Enhanced GEO targeting for Iran and Middle East
				{ name: 'geo.region', content: 'IR-07' }, // Tehran Province
				{ name: 'geo.placename', content: 'Tehran, Iran' },
				{ name: 'geo.position', content: '37.5310850;45.0808324' }, // Updated coordinates
				{ name: 'ICBM', content: '37.5310850, 45.0808324' },
				{ name: 'geo.country', content: 'IR' },
				{ name: 'geo.locality', content: 'Tehran' },
				{ name: 'distribution', content: 'global' },
				{ name: 'coverage', content: 'worldwide' },
				{ name: 'target', content: 'all' },
				{ name: 'audience', content: 'all' },
				
				// Regional market targeting
				{ name: 'geo.primary-region', content: 'Iran' },
				{ name: 'geo.secondary-regions', content: 'Iraq, Turkey, Azerbaijan' },
				{ name: 'business.location', content: 'Tehran, Iran' },
				{ name: 'business.service-area', content: 'Middle East' },
				{ name: 'business.timezone', content: 'Asia/Tehran' },
				{ name: 'business.currency', content: 'IRR' },
				{ name: 'business.language', content: 'Persian, English, Arabic, Turkish' },
				
				// Open Graph / Facebook with GEO
				{ property: 'og:type', content: 'website' },
				{ property: 'og:site_name', content: 'Tecso Team' },
				{ property: 'og:title', content: 'Tecso Team - Leading Iranian Digital Agency & Software Development Company' },
				{ property: 'og:description', content: 'Professional Iranian IT company founded by expert developers. Specializing in Platform Development, AI Software, Cybersecurity, and Digital Solutions for Iran, Iraq, Turkey, and Azerbaijan markets.' },
				{ property: 'og:image', content: '/images/og-tecso-team.webp' },
				{ property: 'og:image:alt', content: 'Tecso Team - Iranian Digital Agency Logo' },
				{ property: 'og:image:width', content: '1200' },
				{ property: 'og:image:height', content: '630' },
				{ property: 'og:url', content: 'https://tecso.team' },
				{ property: 'og:locale', content: 'en_US' },
				{ property: 'og:locale:alternate', content: 'fa_IR' },
				{ property: 'og:locale:alternate', content: 'ar_IQ' },
				{ property: 'og:locale:alternate', content: 'tr_TR' },
				{ property: 'og:locale:alternate', content: 'az_AZ' },
				
				// Open Graph Business Info
				{ property: 'business:contact_data:street_address', content: 'Tehran Tech District' },
				{ property: 'business:contact_data:locality', content: 'Tehran' },
				{ property: 'business:contact_data:region', content: 'Tehran Province' },
				{ property: 'business:contact_data:country_name', content: 'Iran' },
				{ property: 'business:contact_data:phone_number', content: '+98-905-843-2452' },
				{ property: 'business:contact_data:website', content: 'https://tecso.team' },
				
				// Place-specific Open Graph
				{ property: 'place:location:latitude', content: '37.5310850' },
				{ property: 'place:location:longitude', content: '45.0808324' },
				
				// Twitter
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:site', content: '@tecsoteam' },
				{ name: 'twitter:creator', content: '@sobhanazimzadeh' },
				{ name: 'twitter:title', content: 'Tecso Team - Leading Iranian Digital Agency & Software Development' },
				{ name: 'twitter:description', content: 'Expert Iranian IT company specializing in Platform Development, AI Software, and Digital Solutions. Led by Sobhan Azimzadeh and expert developers.' },
				{ name: 'twitter:image', content: '/images/twitter-tecso-team.webp' },
				{ name: 'twitter:image:alt', content: 'Tecso Team Iranian Digital Agency' },
				
				// LinkedIn
				{ property: 'article:publisher', content: 'https://www.linkedin.com/company/tecso-team' },
				{ property: 'article:author', content: 'https://www.linkedin.com/in/sobhan-azimzadeh/' },
				
				// Additional SEO
				{ name: 'author', content: 'Tecso Team - Sobhan Azimzadeh, Ashkan Maleki, Sajjad Manafi' },
				{ name: 'publisher', content: 'Tecso Team' },
				{ name: 'theme-color', content: '#ffffff' },
				{ name: 'mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'application-name', content: 'Tecso Team' },
				{ name: 'apple-mobile-web-app-title', content: 'Tecso Team' },
				{ name: 'msapplication-TileColor', content: '#ffffff' },
				
				// Business info with GEO data
				{ name: 'contact:phone_number', content: '+98 905 843 2452' },
				{ name: 'contact:email', content: 'tecsoteam@gmail.com' },
				{ name: 'contact:country_name', content: 'Iran' },
				{ name: 'contact:region', content: 'Tehran' },
				{ name: 'contact:locality', content: 'Tehran' },
				{ name: 'contact:postal_code', content: '1234567890' },
				{ name: 'contact:street_address', content: 'Tehran Tech District' },
				
				// Regional business targeting
				{ name: 'business.ceo', content: 'Sobhan Azimzadeh' },
				{ name: 'business.coo', content: 'Ashkan Maleki' },
				{ name: 'business.cto', content: 'Sajjad Manafi' },
				{ name: 'business.founded', content: '2020' },
				{ name: 'business.employees', content: '10-50' },
				{ name: 'business.industry', content: 'Information Technology' },
				{ name: 'business.type', content: 'Software Development Company' },
				
				// Market and service area
				{ name: 'service.primary-market', content: 'Iran' },
				{ name: 'service.secondary-markets', content: 'Iraq,Turkey,Azerbaijan' },
				{ name: 'service.languages', content: 'English,Persian,Arabic,Turkish' },
				{ name: 'service.currencies', content: 'IRR,USD,EUR' }
			],
			link: [
				// Favicons (point to existing assets to avoid 404s)
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/logo-32x32.png' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/images/logo-192x192.png' },
				
				// SEO and Canonical
				{ rel: 'canonical', href: 'https://tecso.team' },
				
				// Enhanced hreflang for regional targeting
				{ rel: 'alternate', hreflang: 'en', href: 'https://tecso.team/' },
				{ rel: 'alternate', hreflang: 'fa', href: 'https://tecso.team/fa/' },
				{ rel: 'alternate', hreflang: 'ar', href: 'https://tecso.team/ar/' },
				{ rel: 'alternate', hreflang: 'tr', href: 'https://tecso.team/tr/' },
				{ rel: 'alternate', hreflang: 'az', href: 'https://tecso.team/az/' },
				{ rel: 'alternate', hreflang: 'x-default', href: 'https://tecso.team/' },
				
				// Regional specific alternatives
				{ rel: 'alternate', hreflang: 'fa-IR', href: 'https://tecso.team/fa/' },
				{ rel: 'alternate', hreflang: 'ar-IQ', href: 'https://tecso.team/ar/' },
				{ rel: 'alternate', hreflang: 'tr-TR', href: 'https://tecso.team/tr/' },
				{ rel: 'alternate', hreflang: 'az-AZ', href: 'https://tecso.team/az/' },
				
				// PWA
				{ rel: 'manifest', href: '/manifest.json' },
				
				// Performance
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
				{ rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
				{ rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
				{ rel: 'dns-prefetch', href: 'https://api.github.com' },
				{ rel: 'dns-prefetch', href: 'https://maps.googleapis.com' },
				
				// Regional business directories
				{ rel: 'me', href: 'https://www.linkedin.com/in/sobhan-azimzadeh/' },
				{ rel: 'me', href: 'https://github.com/Tecso-Dev' },
				{ rel: 'me', href: 'https://www.instagram.com/tecso.team/' },
				
				// Geographic and business verification
				{ rel: 'author', href: 'https://tecso.team/about-us' },
				{ rel: 'publisher', href: 'https://tecso.team/' },
				{ rel: 'copyright', href: 'https://tecso.team/' }
			],
			script: [
				{ src: '/js/threejs.min.js', async: true, defer: true }
			],
		}
	},
	runtimeConfig: { 
		apiSecret: process.env.API_SECRET,
		public: {
			frontendUrl: process.env.FRONTENDURL || 'https://tecso.team',
			googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || 'G-XXXXXXXXXX',
			googleTagManagerId: process.env.GTM_ID || 'GTM-XXXXXXX'
		}
	},
	image: {
		// provider: 'netlify',
		domains: process.env.FRONTENDURL ? [process.env.FRONTENDURL] : ['tecso.team'],
		formats: ['webp', 'avif', 'jpg', 'png'],
		quality: 85,
		densities: [1, 2],
		presets: {
			portfolio: {
				modifiers: {
					format: 'webp',
					quality: 80,
					width: 800,
					height: 600,
					fit: 'cover'
				}
			},
			thumbnail: {
				modifiers: {
					format: 'webp',
					quality: 70,
					width: 400,
					height: 300,
					fit: 'cover'
				}
			},
			hero: {
				modifiers: {
					format: 'webp',
					quality: 90,
					width: 1920,
					height: 1080,
					fit: 'cover'
				}
			},
			team: {
				modifiers: {
					format: 'webp',
					quality: 85,
					width: 300,
					height: 300,
					fit: 'cover'
				}
			}
		}
	},
	experimental: {
		payloadExtraction: false
	},
	nitro: {
		inlineDynamicImports: true,
		// preset: 'netlify_edge'
	},
	router: {
		options: { scrollBehaviorType: 'smooth' },
	},
	routeRules: {
		// Homepage - High priority, prerendered
		'/': { prerender: true },
		
		// Important pages - Prerendered with high priority
		'/about-us': { prerender: true },
		'/service': { prerender: true },
		'/contact': { prerender: true },
		'/portfolio': { prerender: true },
		
		// Dynamic content
		"/blog/**": { prerender: false },
		"/work/category/**": { prerender: false },
		"/portfolio/**": { prerender: false },
		
		// Mode-specific pages (not indexed)
		"/main-demo?mode=dark": { prerender: false },
		"/main-demo?mode=light": { prerender: false },
		"/business?mode=dark": { prerender: false },
		"/business?mode=light": { prerender: false },
		"/architecture?mode=dark": { prerender: false },
		"/architecture?mode=light": { prerender: false },
		"/photographer?mode=dark": { prerender: false },
		"/photographer?mode=light": { prerender: false },
		"/personal?mode=dark": { prerender: false },
		"/personal?mode=light": { prerender: false },
		"/resume?mode=dark": { prerender: false },
		"/resume?mode=light": { prerender: false },
		"/resume/**": { prerender: false },
		"/metro-portfolio-1?mode=dark": { prerender: false },
		"/metro-portfolio-1?mode=light": { prerender: false },
		"/metro-portfolio-2?mode=dark": { prerender: false },
		"/metro-portfolio-2?mode=light": { prerender: false },
		"/slider/**": { prerender: false },
		"/carousel/**": { prerender: false },
		
		// Farsi pages
		"/fa/": { prerender: true },
		"/fa/about-us": { prerender: true },
		"/fa/service": { prerender: true },
		"/fa/contact": { prerender: true }
	},
	ssr: true,
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css',
		'@fancyapps/ui/dist/fancybox/fancybox.css',
		'@/assets/styles/style.scss'
	],
	plugins: [
		{ src: '@/plugins/fontawesome.js' },
		{ src: '@/plugins/splitting.client.js' },
		{ src: '@/plugins/isotope.client.js' },
		{ src: '@/plugins/gtag.client.ts', mode: 'client' },
		{ src: '@/plugins/analytics.client.js', mode: 'client' }
	],
	vue: { compilerOptions: { isCustomElement: (tag) => /^(swiper|swiper-slide|swiper-container)$/.test(tag) } },
	vite: {
		optimizeDeps: {
			include: [
				"smooth-scrollbar",
				"@fancyapps/ui",
				"splitting",
				"flickr-justified-gallery",
				"@googlemaps/js-api-loader",
			]
		}
	},
	build: {
		transpile: [
			'@fortawesome/vue-fontawesome',
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/free-solid-svg-icons',
			'@fortawesome/free-brands-svg-icons',
		],
	},
	compatibilityDate: '2024-08-17',
})