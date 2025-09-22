<template>
  <!-- This component injects JSON-LD into the document head only; no visual output. -->
  <div style="display:none" aria-hidden="true"></div>
</template>

<script setup lang="ts">
// GEO-specific component for location-based SEO
// Move JSON-LD insertion to document head to avoid side-effect tags in templates.

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "name": "Tecso Team",
  "alternateName": ["Tecso", "تکسو تیم"],
  "description": "Leading Iranian IT company specializing in Platform Development, AI Software, Cybersecurity, and Digital Solutions",
  "url": "https://tecso.team",
  "logo": "https://tecso.team/images/logo-tecso-team.webp",
  "image": "https://tecso.team/images/tecso-team-office-iran.webp",
  "@id": "https://tecso.team/#organization",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tehran Tech District",
    "addressLocality": "Tehran",
    "addressRegion": "Tehran Province",
    "postalCode": "1234567890",
    "addressCountry": {
      "@type": "Country",
      "name": "Iran",
      "alternateName": "Islamic Republic of Iran"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "37.5310850",
    "longitude": "45.0808324",
    "address": "Tehran, Iran"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+98-905-843-2452",
      "contactType": "customer service",
      "email": "tecsoteam@gmail.com",
      "availableLanguage": ["English", "Persian", "Arabic", "Turkish"],
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
      ]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+98-914-445-4463",
      "contactType": "design department",
      "contactOption": "TollFree",
      "availableLanguage": ["English", "Persian"]
    }
  ],
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Middle East",
      "containsPlace": [
        {
          "@type": "Country",
          "name": "Iran",
          "alternateName": ["IR", "Islamic Republic of Iran", "ایران"]
        },
        {
          "@type": "Country",
          "name": "Iraq",
          "alternateName": ["IQ", "Republic of Iraq", "العراق"]
        },
        {
          "@type": "Country",
          "name": "Turkey",
          "alternateName": ["TR", "Republic of Turkey", "Türkiye"]
        },
        {
          "@type": "Country",
          "name": "Azerbaijan",
          "alternateName": ["AZ", "Republic of Azerbaijan", "Azərbaycan"]
        }
      ]
    }
  ],
  "hasMap": "https://maps.google.com/?q=37.5310850,45.0808324&entry=gps&lucs=,94284454,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304&g_st=ic",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": ["IRR", "USD", "EUR"],
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Cryptocurrency"],
  "founder": [
    {
      "@type": "Person",
      "name": "Sobhan Azimzadeh",
      "jobTitle": "CEO & Vue.js Developer",
      "url": "https://www.linkedin.com/in/sobhan-azimzadeh/",
      "telephone": "+98-905-843-2452",
      "nationality": "Iranian",
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
      "jobTitle": "COD, Designer and UI/UX Specialist",
      "telephone": "+98-914-445-4463",
      "nationality": "Iranian"
    },
    {
      "@type": "Person",
      "name": "Sajjad Manafi",
      "jobTitle": "GoLang Developer and Backend Team Lead",
      "nationality": "Iranian"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "37.5310850",
      "longitude": "45.0808324"
    },
    "geoRadius": "2000000"
  },
  "knowsAbout": [
    "Platform Development",
    "Vue.js Development",
    "GoLang Programming",
    "AI Software Programming",
    "Cybersecurity",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "Backend Development",
    "Frontend Development"
  ],
  "sameAs": [
    "https://github.com/Tecso-Dev",
    "https://www.linkedin.com/in/sobhan-azimzadeh/",
    "https://www.instagram.com/tecso.team/",
    "https://t.me/+989922068945"
  ]
} as const

const placeSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Tecso Team Office",
  "description": "Tecso Team headquarters in Tehran, Iran - Leading Iranian IT company",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "37.5310850",
    "longitude": "45.0808324",
    "elevation": "1200"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tehran",
    "addressRegion": "Tehran Province",
    "addressCountry": "Iran",
    "postalCode": "1234567890"
  },
  "containedInPlace": {
    "@type": "AdministrativeArea",
    "name": "Tehran",
    "containedInPlace": {
      "@type": "Country",
      "name": "Iran"
    }
  },
  "hasMap": "https://maps.google.com/?q=37.5310850,45.0808324&entry=gps&lucs=,94284454,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304&g_st=ic",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "timezone",
      "value": "Asia/Tehran"
    },
    {
      "@type": "PropertyValue",
      "name": "currency",
      "value": "IRR"
    },
    {
      "@type": "PropertyValue",
      "name": "language",
      "value": "Persian"
    }
  ]
} as const

const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Services in Middle East",
  "description": "Comprehensive digital services covering Iran, Iraq, Turkey, and Azerbaijan",
  "provider": {
    "@type": "Organization",
    "@id": "https://tecso.team/#organization"
  },
  "serviceArea": [
    {
      "@type": "Country",
      "name": "Iran",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.4279",
        "longitude": "53.6880"
      },
      "containsPlace": [
        { "@type": "City", "name": "Tehran", "alternateName": "تهران" },
        { "@type": "City", "name": "Isfahan", "alternateName": "اصفهان" },
        { "@type": "City", "name": "Mashhad", "alternateName": "مشهد" },
        { "@type": "City", "name": "Shiraz", "alternateName": "شیراز" }
      ]
    },
    {
      "@type": "Country",
      "name": "Iraq",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.2232",
        "longitude": "43.6793"
      },
      "containsPlace": [
        { "@type": "City", "name": "Baghdad", "alternateName": "بغداد" },
        { "@type": "City", "name": "Erbil", "alternateName": "أربيل" }
      ]
    },
    {
      "@type": "Country",
      "name": "Turkey",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "38.9637",
        "longitude": "35.2433"
      },
      "containsPlace": [
        { "@type": "City", "name": "Istanbul" },
        { "@type": "City", "name": "Ankara" }
      ]
    },
    {
      "@type": "Country",
      "name": "Azerbaijan",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.1431",
        "longitude": "47.5769"
      },
      "containsPlace": [
        { "@type": "City", "name": "Baku" }
      ]
    }
  ],
  "availableLanguage": ["English", "Persian", "Arabic", "Turkish", "Azerbaijani"]
} as const

useHead(() => ({
  script: [
    {
      key: 'geo-localbusiness',
      type: 'application/ld+json',
      children: JSON.stringify(localBusinessSchema)
    },
    {
      key: 'geo-place',
      type: 'application/ld+json',
      children: JSON.stringify(placeSchema)
    },
    {
      key: 'geo-service',
      type: 'application/ld+json',
      children: JSON.stringify(serviceAreaSchema)
    }
  ]
}))
</script>