// https://nuxt.com/docs/api/configuration/nuxt-config
import { addPlugin,createResolver,defineNuxtModule } from '@nuxt/kit'
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxt/image',"@nuxtjs/device"],
	app: {
		baseURL: '/',
		head: {
			title: 'Tecso Team - Digital Agency & Software Development',
			htmlAttrs: {
				lang: 'en'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'Tecso Team is a leading digital agency specializing in Platform Development, Graphic Design, Business Analysis, SEO, AI Software Programming, Infrastructure & Security, and Mobile Development.' },
				{ name: 'keywords', content: 'Platform Development, Graphic Design, Business Analysis, SEO, AI Software, Infrastructure Security, Mobile Development, Digital Agency' },
				{ name: 'robots', content: 'index, follow' },
				{ name: 'format-detection', content: 'telephone=no' },
				
				// Open Graph / Facebook
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'Tecso Team - Digital Agency & Software Development' },
				{ property: 'og:description', content: 'Professional digital agency offering comprehensive software solutions including Platform Development, AI, SEO, and Business Analysis.' },
				{ property: 'og:image', content: '/images/logo-32x32.png' },
				
				// Twitter
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: 'Tecso Team - Digital Agency & Software Development' },
				{ name: 'twitter:description', content: 'Professional digital agency offering comprehensive software solutions including Platform Development, AI, SEO, and Business Analysis.' },
				{ name: 'twitter:image', content: '/images/logo-32x32.png' },
				
				// Additional SEO
				{ name: 'author', content: 'Tecso Team' },
				{ name: 'theme-color', content: '#ffffff' }
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/images/logo-32x32.png' },
				{ rel: 'canonical', href: 'https://tecso.team' },
				{ rel: 'manifest', href: '/manifest.json' }
			],
		}
	},
	runtimeConfig: {
		apiSecret: process.env.API_SECRET,
		public: {}
	},
	image: {
		// provider: 'netlify',
		domains: process.env.FRONTENDURL ? [process.env.FRONTENDURL] : [],
		formats: ['image/webp', 'image/avif'],
		quality: 80,
		loading: 'lazy',
		responsive: {
			modifiers: {
				format: 'webp',
				quality: 80
			}
		}
	},
	experimental: {
		payloadExtraction: false,
		viewTransition: true
	},
	nitro: {
		inlineDynamicImports: true,
		// preset: 'netlify_edge'
		minify: true,
		compressPublicAssets: true,
		prerender: {
			crawlLinks: false,  // Disable automatic crawling to avoid issues
			failOnError: false  // Don't fail on prerender errors
		},
		experimental: {
			wasm: true
		}
	},
	router: {
		options: { scrollBehaviorType: 'smooth' },
	},
	routeRules: {
		// Prerender static pages for better performance
		'/': { prerender: true },
		'/about-us': { prerender: true },
		'/service': { prerender: true },
		'/contact': { prerender: true },
		'/main-demo': { prerender: true },
		'/business': { prerender: true },
		'/architecture': { prerender: true },
		'/metro-portfolio-1': { prerender: true },
		'/metro-portfolio-2': { prerender: true },
		
		// Dynamic content that requires SSR
		"/blog/**": { prerender: false, ssr: true },
		"/work/category/**": { prerender: false, ssr: true },
		"/portfolio/**": { prerender: false, ssr: true },
		"/slider/**": { prerender: false, ssr: true },
		"/carousel/**": { prerender: false, ssr: true },
		
		// Theme variants can be prerendered
		"/main-demo?mode=dark": { prerender: true },
		"/main-demo?mode=light": { prerender: true },
		"/business?mode=dark": { prerender: true },
		"/business?mode=light": { prerender: true },
		"/architecture?mode=dark": { prerender: true },
		"/architecture?mode=light": { prerender: true },
		"/metro-portfolio-1?mode=dark": { prerender: true },
		"/metro-portfolio-1?mode=light": { prerender: true },
		"/metro-portfolio-2?mode=dark": { prerender: true },
		"/metro-portfolio-2?mode=light": { prerender: true }
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
		{ src: '@/plugins/isotope.client.js' }
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
				"gsap"
			]
		},
		build: {
			rollupOptions: {
				output: {
					chunkFileNames: '_nuxt/[name].[hash].js',
					entryFileNames: '_nuxt/[name].[hash].js',
					assetFileNames: '_nuxt/[name].[hash].[ext]',
					manualChunks: (id) => {
						if (id.includes('node_modules')) {
							// Group large libraries together
							if (id.includes('swiper')) {
								return 'vendor-swiper';
							}
							if (id.includes('isotope-layout')) {
								return 'vendor-isotope';
							}
							if (id.includes('@fancyapps/ui') || id.includes('splitting')) {
								return 'vendor-ui';
							}
							// Keep other vendor libraries in the main chunk for now
							return 'vendor';
						}
					}
				}
			},
			target: 'es2018',
			cssCodeSplit: true,
			sourcemap: false
		}
	},
	build: {
		transpile: [
			'@fortawesome/vue-fontawesome',
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/free-solid-svg-icons',
			'@fortawesome/free-brands-svg-icons',
		],
		analyze: process.env.NODE_ENV === 'production'
	},
	compatibilityDate: '2024-08-17',
})