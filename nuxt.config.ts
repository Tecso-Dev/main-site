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
				{ rel: 'canonical', href: 'https://your-domain.com' }
			],
			script: [
				{ src: '/js/threejs.min.js', body: true, async: true, defer: true }
			],
		}
	},
	privateRuntimeConfig: { apiSecret: process.env.API_SECRET },
	image: {
		// provider: 'netlify',
		domains: [process.env.FRONTENDURL],
		formats: ['image/webp']
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
		'/': { prerender: true },
		"/blog/**": { prerender: false },
		"/work/category/**": { prerender: false },
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
		"/portfolio/**": { prerender: false },
		"/slider/**": { prerender: false },
		"/carousel/**": { prerender: false },
		"": { prerender: false },
		"": { prerender: false },
		"": { prerender: false },

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