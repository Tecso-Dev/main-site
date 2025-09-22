<template>
  <!-- This component injects JSON-LD into the head; no visual output. -->
  <div style="display:none" aria-hidden="true"></div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ breadcrumbs?: any[] }>(), {
  breadcrumbs: () => []
})

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tecso Team",
  "alternateName": "Tecso",
  "url": "https://tecso.team",
  "logo": "https://tecso.team/images/logo-tecso-team.webp",
  "description": "Leading Iranian IT company specializing in Platform Development, AI Software, Cybersecurity, and Digital Solutions",
  "foundingDate": "2020",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+98-905-843-2452",
      "contactType": "customer service",
      "email": "tecsoteam@gmail.com",
      "availableLanguage": ["English", "Persian", "Arabic", "Turkish"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IR",
    "addressRegion": "Tehran",
    "addressLocality": "Tehran"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "37.5310850",
    "longitude": "45.0808324"
  },
  "sameAs": [
    "https://github.com/Tecso-Dev",
    "https://www.linkedin.com/in/sobhan-azimzadeh/",
    "https://www.instagram.com/tecso.team/",
    "https://t.me/+989922068945"
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Sobhan Azimzadeh",
      "jobTitle": "CEO & Vue.js Developer",
      "url": "https://www.linkedin.com/in/sobhan-azimzadeh/",
      "telephone": "+98-905-843-2452"
    }
  ],
  "employee": [
    { "@type": "Person", "name": "Ashkan Maleki", "jobTitle": "COD, Designer and UI/UX Specialist", "telephone": "+98-914-445-4463" },
    { "@type": "Person", "name": "Sajjad Manafi", "jobTitle": "GoLang Developer and Backend Team Lead" }
  ],
  "areaServed": [
    { "@type": "Country", "name": "Iran" },
    { "@type": "Country", "name": "Iraq" },
    { "@type": "Country", "name": "Turkey" },
    { "@type": "Country", "name": "Azerbaijan" }
  ],
  "serviceType": [
    "Platform Development",
    "AI Software Programming",
    "Cybersecurity",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "Backend Development"
  ]
} as const

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tecso Team",
  "url": "https://tecso.team",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://tecso.team/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tecso Team",
    "logo": { "@type": "ImageObject", "url": "https://tecso.team/images/logo-tecso-team.webp" }
  }
} as const

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Tecso Team Digital Services",
  "image": "https://tecso.team/images/services-tecso-team.webp",
  "description": "Comprehensive digital services including Platform Development, AI Software, Cybersecurity, and Mobile Development",
  "provider": { "@type": "Organization", "name": "Tecso Team" },
  "areaServed": ["Iran", "Iraq", "Turkey", "Azerbaijan"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Platform Development", "description": "Custom platform development using modern technologies" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Software Programming", "description": "Artificial Intelligence and Machine Learning solutions" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity", "description": "Comprehensive cybersecurity solutions and consulting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Development", "description": "Native and cross-platform mobile application development" } }
    ]
  }
} as const

const breadcrumbsSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  // Expecting props.breadcrumbs to already be an array of ListItem
  // with { position, item: { @id, name } }
  "itemListElement": props.breadcrumbs ?? []
}))

useHead(() => {
  const scripts: Array<Record<string, any>> = [
    { key: 'sd-organization', type: 'application/ld+json', children: JSON.stringify(organizationSchema) },
    { key: 'sd-website', type: 'application/ld+json', children: JSON.stringify(websiteSchema) },
    { key: 'sd-service', type: 'application/ld+json', children: JSON.stringify(serviceSchema) }
  ]
  if (props.breadcrumbs && props.breadcrumbs.length > 0) {
    scripts.push({ key: 'sd-breadcrumbs', type: 'application/ld+json', children: JSON.stringify(breadcrumbsSchema.value) })
  }
  return { script: scripts }
})
</script>