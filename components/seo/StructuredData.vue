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
  "@type": ["Organization", "TechnologyCompany"],
  "@id": "https://tecso.team/#organization",
  "name": "Tecso Team",
  "alternateName": ["Tecso", "تکسو تیم", "Tecso Development Team"],
  "url": "https://tecso.team",
  "logo": {
    "@type": "ImageObject",
    "url": "https://tecso.team/images/logo-tecso-team.webp",
    "width": 200,
    "height": 200
  },
  "image": "https://tecso.team/images/tecso-team-hero.webp",
  "description": "Leading Iranian IT company specializing in Platform Development, AI Software, Cybersecurity, and Digital Solutions for Iran, Iraq, Turkey, and Azerbaijan markets",
  "foundingDate": "2020-01-01",
  "slogan": "Smart Technology Solutions for Middle East",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+98-905-843-2452",
      "contactType": "customer service",
      "email": "tecsoteam@gmail.com",
      "availableLanguage": ["English", "Persian", "Arabic", "Turkish"],
      "areaServed": ["IR", "IQ", "TR", "AZ"]
    },
    {
      "@type": "ContactPoint", 
      "telephone": "+98-914-445-4463",
      "contactType": "design department",
      "availableLanguage": ["English", "Persian"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IR",
    "addressRegion": "West Azerbaijan",
    "addressLocality": "Urmia",
    "streetAddress": "Bra'ati Street - Asatid Building - P 6",
    "postalCode": "5715693656"
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
      "telephone": "+98-905-843-2452",
      "email": "sobhan.gjhav.azimzadeh@gmail.com",
      "nationality": "Iranian",
      "knowsAbout": ["Vue.js", "JavaScript", "Frontend Development", "Project Management"],
      "worksFor": {
        "@type": "Organization",
        "@id": "https://tecso.team/#organization"
      }
    }
  ],
  "employee": [
    {
      "@type": "Person", 
      "name": "Ashkan Maleki",
      "jobTitle": "COO & UI/UX Designer",
      "telephone": "+98-914-445-4463",
      "nationality": "Iranian",
      "knowsAbout": ["UI/UX Design", "Graphic Design", "Adobe Creative Suite", "Figma"]
    },
    {
      "@type": "Person",
      "name": "Sajjad Manafi", 
      "jobTitle": "GoLang Developer & Backend Lead",
      "nationality": "Iranian",
      "knowsAbout": ["GoLang", "Backend Development", "Database Design", "API Development"]
    }
  ],
  "areaServed": [
    {
      "@type": "Country",
      "name": "Iran",
      "alternateName": "IR"
    },
    {
      "@type": "Country", 
      "name": "Iraq",
      "alternateName": "IQ"
    },
    {
      "@type": "Country",
      "name": "Turkey", 
      "alternateName": "TR"
    },
    {
      "@type": "Country",
      "name": "Azerbaijan",
      "alternateName": "AZ"
    }
  ],
  "serviceType": [
    "Platform Development",
    "Vue.js Development", 
    "Nuxt.js Development",
    "GoLang Development",
    "AI Software Programming",
    "Cybersecurity",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "Backend Development"
  ],
  "knowsAbout": [
    "Web Development",
    "Mobile App Development", 
    "Artificial Intelligence",
    "Cybersecurity",
    "UI/UX Design",
    "Digital Marketing",
    "Vue.js Framework",
    "Nuxt.js Framework", 
    "GoLang Programming",
    "JavaScript Development"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tecso Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Platform Development & Web Solutions",
          "description": "Custom platform development using Vue.js, Nuxt.js, React, and GoLang"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Cybersecurity & Data Protection",
          "description": "Comprehensive cybersecurity solutions for Middle Eastern businesses"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Mobile App Development",
          "description": "iOS and Android development for Middle Eastern markets"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design & Brand Identity", 
          "description": "Cultural-sensitive design for Middle Eastern audiences"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Solutions & Digital Marketing",
          "description": "AI development and digital marketing for regional markets"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "32",
    "bestRating": "5",
    "worstRating": "1"
  },
  "numberOfEmployees": "3-10",
  "legalName": "Tecso Team Software Development Company"
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