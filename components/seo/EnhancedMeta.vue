<template>
  <Head>
    <!-- Primary Meta Tags -->
    <Title>{{ computedTitle }}</Title>
    <Meta name="title" :content="computedTitle" />
    <Meta name="description" :content="description" />
    <Meta name="keywords" :content="keywords" />
    <Meta name="author" :content="author" />
    <Meta name="robots" :content="robots" />
    <Meta name="language" :content="language" />
    <Meta name="revisit-after" content="7 days" />
    <Meta name="distribution" content="global" />
    <Meta name="rating" content="general" />
    
    <!-- Geographic Meta Tags -->
    <Meta name="geo.region" content="IR-07" />
    <Meta name="geo.placename" content="Iran" />
    <Meta name="geo.position" content="37.5310850;45.0808324" />
    <Meta name="ICBM" content="37.5310850, 45.0808324" />
    
    <!-- Business Meta Tags -->
    <Meta name="business.location" content="Iran" />
    <Meta name="business.service-area" content="Iran, Iraq, Turkey, Azerbaijan" />
    <Meta name="business.contact" content="+98-905-843-2452" />
    <Meta name="business.email" content="tecsoteam@gmail.com" />
    
    <!-- Open Graph / Facebook -->
    <Meta property="og:type" :content="ogType" />
    <Meta property="og:site_name" content="Tecso Team" />
    <Meta property="og:title" :content="ogTitle || computedTitle" />
    <Meta property="og:description" :content="ogDescription || description" />
    <Meta property="og:image" :content="computedOgImage" />
    <Meta property="og:image:alt" :content="ogImageAlt" />
    <Meta property="og:image:width" content="1200" />
    <Meta property="og:image:height" content="630" />
    <Meta property="og:url" :content="canonicalUrl" />
    <Meta property="og:locale" content="en_US" />
    <Meta property="og:locale:alternate" content="fa_IR" />
    <Meta property="og:locale:alternate" content="ar_IQ" />
    <Meta property="og:locale:alternate" content="tr_TR" />
    <Meta property="og:locale:alternate" content="az_AZ" />
    
    <!-- Article specific (for blog posts) -->
    <Meta v-if="isArticle" property="article:author" content="Tecso Team" />
    <Meta v-if="isArticle && publishedTime" property="article:published_time" :content="publishedTime" />
    <Meta v-if="isArticle && modifiedTime" property="article:modified_time" :content="modifiedTime" />
    <Meta v-if="isArticle && section" property="article:section" :content="section" />
    <Meta v-if="isArticle && tags.length" property="article:tag" :content="tags.join(', ')" />
    
    <!-- Twitter -->
    <Meta name="twitter:card" :content="twitterCard" />
    <Meta name="twitter:site" content="@tecsoteam" />
    <Meta name="twitter:creator" content="@sobhanazimzadeh" />
    <Meta name="twitter:title" :content="twitterTitle || computedTitle" />
    <Meta name="twitter:description" :content="twitterDescription || description" />
    <Meta name="twitter:image" :content="computedTwitterImage" />
    <Meta name="twitter:image:alt" :content="twitterImageAlt" />
    
    <!-- LinkedIn -->
    <Meta property="linkedin:title" :content="computedTitle" />
    <Meta property="linkedin:description" :content="description" />
    <Meta property="linkedin:image" :content="computedOgImage" />
    
    <!-- Pinterest -->
    <Meta name="pinterest-rich-pin" content="true" />
    <Meta property="pinterest:title" :content="computedTitle" />
    <Meta property="pinterest:description" :content="description" />
    
    <!-- WhatsApp -->
    <Meta property="whatsapp:title" :content="computedTitle" />
    <Meta property="whatsapp:description" :content="description" />
    <Meta property="whatsapp:image" :content="computedOgImage" />
    
    <!-- Telegram -->
    <Meta property="telegram:title" :content="computedTitle" />
    <Meta property="telegram:description" :content="description" />
    <Meta property="telegram:image" :content="computedOgImage" />
    
    <!-- Canonical and Alternate Languages -->
    <Link rel="canonical" :href="canonicalUrl" />
    <Link v-if="hasMultiLanguage" rel="alternate" hreflang="en" :href="canonicalUrl" />
    <Link v-if="hasMultiLanguage" rel="alternate" hreflang="fa" :href="getFarsiUrl()" />
    <Link v-if="hasMultiLanguage" rel="alternate" hreflang="ar" :href="getArabicUrl()" />
    <Link v-if="hasMultiLanguage" rel="alternate" hreflang="tr" :href="getTurkishUrl()" />
    <Link v-if="hasMultiLanguage" rel="alternate" hreflang="x-default" :href="canonicalUrl" />
    
    <!-- Preconnect and DNS Prefetch -->
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <Link rel="dns-prefetch" href="https://www.google-analytics.com" />
    <Link rel="dns-prefetch" href="https://github.com" />
    <Link rel="dns-prefetch" href="https://linkedin.com" />
    <Link rel="dns-prefetch" href="https://instagram.com" />
    
    <!-- Application specific -->
    <Meta name="application-name" content="Tecso Team" />
    <Meta name="apple-mobile-web-app-title" content="Tecso Team" />
    <Meta name="apple-mobile-web-app-capable" content="yes" />
    <Meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <Meta name="mobile-web-app-capable" content="yes" />
    <Meta name="msapplication-TileColor" content="#ffffff" />
    <Meta name="msapplication-config" content="/browserconfig.xml" />
    <Meta name="theme-color" content="#ffffff" />
    
    <!-- Verification -->
    <Meta name="google-site-verification" content="your-google-verification-code" />
    <Meta name="msvalidate.01" content="your-bing-verification-code" />
    <Meta name="yandex-verification" content="your-yandex-verification-code" />
    
    <!-- Copyright and Contact -->
    <Meta name="copyright" content="© 2025 Tecso Team. All rights reserved." />
    <Meta name="contact" content="tecsoteam@gmail.com" />
    <Meta name="reply-to" content="tecsoteam@gmail.com" />
  </Head>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description: string
  keywords?: string
  author?: string
  robots?: string
  language?: string
  ogType?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogImageAlt?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  twitterImageAlt?: string
  isArticle?: boolean
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  hasMultiLanguage?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  author: 'Tecso Team - Sobhan Azimzadeh, Ashkan Maleki, Sajjad Manafi',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  language: 'en',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  tags: () => [],
  hasMultiLanguage: true
})

const route = useRoute()
const config = useRuntimeConfig()

const computedTitle = computed(() => {
  if (!props.title) return 'Tecso Team - Leading Iranian Digital Agency & Software Development'
  return props.title.includes('Tecso Team') 
    ? props.title 
    : `${props.title} | Tecso Team - Iranian IT Company`
})

const canonicalUrl = computed(() => {
  return `${config.public.frontendUrl}${route.path}`
})

const computedOgImage = computed(() => {
  return props.ogImage || `${config.public.frontendUrl}/images/og-tecso-team.webp`
})

const computedTwitterImage = computed(() => {
  return props.twitterImage || `${config.public.frontendUrl}/images/twitter-tecso-team.webp`
})

const ogImageAlt = computed(() => {
  return props.ogImageAlt || `Tecso Team - ${props.title || 'Iranian IT Company'}`
})

const twitterImageAlt = computed(() => {
  return props.twitterImageAlt || `Tecso Team - ${props.title || 'Iranian IT Company'}`
})

const getFarsiUrl = () => {
  const path = route.path === '/' ? '/fa/' : `/fa${route.path}`
  return `${config.public.frontendUrl}${path}`
}

const getArabicUrl = () => {
  const path = route.path === '/' ? '/ar/' : `/ar${route.path}`
  return `${config.public.frontendUrl}${path}`
}

const getTurkishUrl = () => {
  const path = route.path === '/' ? '/tr/' : `/tr${route.path}`
  return `${config.public.frontendUrl}${path}`
}
</script>