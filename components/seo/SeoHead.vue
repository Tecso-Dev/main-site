<template>
  <Head>
    <!-- Dynamic Title -->
    <Title>{{ fullTitle }}</Title>
    
    <!-- Dynamic Meta Tags -->
    <Meta name="description" :content="description" />
    <Meta name="keywords" :content="keywords" />
    <Meta name="author" :content="author" />
    
    <!-- Open Graph -->
    <Meta property="og:title" :content="ogTitle" />
    <Meta property="og:description" :content="ogDescription" />
    <Meta property="og:image" :content="ogImage" />
    <Meta property="og:url" :content="ogUrl" />
    <Meta property="og:type" :content="ogType" />
    
    <!-- Twitter -->
    <Meta name="twitter:title" :content="twitterTitle" />
    <Meta name="twitter:description" :content="twitterDescription" />
    <Meta name="twitter:image" :content="twitterImage" />
    
    <!-- Canonical -->
    <Link rel="canonical" :href="canonicalUrl" />
    
    <!-- Hreflang (if multilingual) -->
    <Link v-if="hreflang" rel="alternate" :hreflang="hreflang" :href="hreflangUrl" />
  </Head>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Tecso Team - Digital Agency & Software Development'
  },
  description: {
    type: String,
    default: 'Leading Iranian IT company specializing in Platform Development, AI Software, Cybersecurity, and Digital Solutions for Iran, Iraq, Turkey, and Azerbaijan markets.'
  },
  keywords: {
    type: String,
    default: 'Tecso Team, Iran IT company, Platform Development, AI Software, Cybersecurity, Mobile Development, Digital Marketing'
  },
  author: {
    type: String,
    default: 'Tecso Team - Sobhan Azimzadeh, Ashkan Maleki, Sajjad Manafi'
  },
  ogImage: {
    type: String,
    default: '/images/og-tecso-team.webp'
  },
  twitterImage: {
    type: String,
    default: '/images/twitter-tecso-team.webp'
  },
  ogType: {
    type: String,
    default: 'website'
  },
  hreflang: {
    type: String,
    default: ''
  },
  hreflangUrl: {
    type: String,
    default: ''
  }
});

const route = useRoute();
const config = useRuntimeConfig();

const fullTitle = computed(() => {
  return props.title.includes('Tecso Team') 
    ? props.title 
    : `${props.title} | Tecso Team - Digital Agency Iran`;
});

const ogTitle = computed(() => props.title);
const ogDescription = computed(() => props.description);
const twitterTitle = computed(() => props.title);
const twitterDescription = computed(() => props.description);

const canonicalUrl = computed(() => {
  return `${config.public.frontendUrl}${route.path}`;
});

const ogUrl = computed(() => canonicalUrl.value);
</script>