<template>
  <!-- This component has no visual output; it only injects JSON-LD into the document head. -->
  <div style="display:none" aria-hidden="true"></div>
</template>

<script setup>
// Google My Business Schema for Local SEO
const googleMyBusinessSchema = computed(() => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tecso Team",
    "alternateName": "Tecso",
    "description": "Professional Software Development and Digital Solutions Company based in Tehran, Iran. We specialize in web development, mobile applications, UI/UX design, and digital transformation services for businesses across the Middle East.",
    "url": "https://tecso.team",
    "logo": "https://tecso.team/images/logo.png",
    
    // Business Categories
    "additionalType": [
      "https://schema.org/ComputerRepair",
      "https://schema.org/WebDesign",
      "https://schema.org/SoftwareApplication"
    ],
    
    // Location Information
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tehran Technology District",
      "addressLocality": "Tehran",
      "addressRegion": "Tehran Province",
      "postalCode": "1111111111",
      "addressCountry": {
        "@type": "Country",
        "name": "Iran",
        "alternateName": "IR"
      }
    },
    
    // Geographic Coordinates
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.5310850,
      "longitude": 45.0808324,
      "address": "Tehran, Iran"
    },
    
    // Contact Information
    "telephone": "+98-905-843-2452",
    "email": "tecsoteam@gmail.com",
    
    // Business Hours
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "17:00",
        "validFrom": "2020-01-01",
        "validThrough": "2030-12-31"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "12:00",
        "validFrom": "2020-01-01",
        "validThrough": "2030-12-31"
      }
    ],
    
    // Service Areas
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
      },
      {
        "@type": "Place",
        "name": "Middle East",
        "description": "Middle Eastern countries and regions"
      }
    ],
    
    // Services Offered
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tecso Digital Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Web Development",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Development",
                "description": "Modern, responsive websites using latest technologies"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce Solutions",
                "description": "Complete online store development and management"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog", 
          "name": "Mobile Development",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "iOS App Development",
                "description": "Native and cross-platform iOS applications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Android App Development", 
                "description": "Native and cross-platform Android applications"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "UI/UX Design",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "User Interface Design",
                "description": "Modern, intuitive user interface design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "User Experience Optimization",
                "description": "User-centered design and experience optimization"
              }
            }
          ]
        }
      ]
    },
    
    // Team Members
    "employee": [
      {
        "@type": "Person",
        "name": "Sobhan Azimzadeh",
        "jobTitle": "Chief Executive Officer",
        "description": "Experienced technology leader and entrepreneur",
        "worksFor": {
          "@type": "Organization",
          "name": "Tecso Team"
        }
      },
      {
        "@type": "Person", 
        "name": "Ashkan Maleki",
        "jobTitle": "UI/UX Designer",
        "description": "Creative designer specializing in user experience",
        "worksFor": {
          "@type": "Organization",
          "name": "Tecso Team"
        }
      },
      {
        "@type": "Person",
        "name": "Sajjad Manafi", 
        "jobTitle": "GoLang Developer",
        "description": "Backend developer specializing in Go programming",
        "worksFor": {
          "@type": "Organization",
          "name": "Tecso Team"
        }
      }
    ],
    
    // Social Media Profiles
    "sameAs": [
      "https://www.linkedin.com/company/tecso-team",
      "https://github.com/Tecso-Dev",
      "https://twitter.com/tecso_team",
      "https://www.instagram.com/tecso.team/"
    ],
    
    // Business Identifiers
    "taxID": "IR-XXXXXXXXXX",
    "vatID": "IR-XXXXXXXXXX",
    
    // Business Status
    "foundingDate": "2020-01-01",
    "numberOfEmployees": "3-10",
    "legalName": "Tecso Team Software Development Company",
    
    // Languages
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language", 
        "name": "Persian",
        "alternateName": "fa"
      },
      {
        "@type": "Language",
        "name": "Arabic", 
        "alternateName": "ar"
      },
      {
        "@type": "Language",
        "name": "Turkish",
        "alternateName": "tr"
      }
    ],
    
    // Reviews and Ratings (placeholder - update with real data)
    "aggregateRating": {
      "@type": "AggregateRating", 
      "ratingValue": "4.8",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    }
  })
})

// Inject JSON-LD into <head> using Nuxt's head management
useHead(() => ({
  script: [
    {
      key: 'gmb-schema',
      type: 'application/ld+json',
      // children should be a JSON string
      children: googleMyBusinessSchema.value
    }
  ]
}))
</script>

<style scoped>
/* This component only provides structured data, no visual styling needed */
</style>