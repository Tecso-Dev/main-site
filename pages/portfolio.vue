<script setup>
import { ref, onMounted } from 'vue'

// SEO Configuration
useSeoMeta({
  title: 'Portfolio | Tecso Team - Our Best Projects & Case Studies',
  ogTitle: 'Portfolio | Tecso Team - Our Best Projects & Case Studies',
  description: 'Explore Tecso Team\'s portfolio showcasing innovative web applications, mobile apps, e-commerce platforms, and digital solutions. See our expertise in Vue.js, Nuxt.js, GoLang, and UI/UX design.',
  ogDescription: 'Explore Tecso Team\'s portfolio showcasing innovative web applications, mobile apps, e-commerce platforms, and digital solutions. See our expertise in Vue.js, Nuxt.js, GoLang, and UI/UX design.',
  keywords: 'Tecso Team portfolio, web development projects, mobile app development, Vue.js projects, Nuxt.js applications, GoLang backend, UI/UX design, e-commerce platforms, Iranian IT company projects',
  ogImage: '/images/og-portfolio-tecso-team.webp',
  twitterImage: '/images/twitter-portfolio-tecso-team.webp',
  twitterCard: 'summary_large_image',
  author: 'Tecso Team Portfolio',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
})

// Load portfolio data
const portfolioItems = ref([])

onMounted(async () => {
  try {
    // Import portfolio data
    const { default: portfolioData } = await import('@/api/portfolio/portfolio.json')
    portfolioItems.value = portfolioData || []
  } catch (error) {
    console.error('Error loading portfolio data:', error)
  }
})
</script>

<template>
  <Head>
    <Title>Portfolio | Tecso Team - Our Best Projects & Case Studies</Title>
  </Head>

  <Layout>
    <!-- Portfolio Header -->
    <div class="container section-padding">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h1 class="title-h2 mb-30">Our <b>Portfolio</b></h1>
          <p class="max-w570">
            Discover our latest projects and case studies showcasing innovative digital solutions, 
            modern web applications, and cutting-edge technology implementations.
          </p>
        </div>
      </div>
    </div>

    <!-- Portfolio Grid -->
    <div v-if="portfolioItems.length > 0">
      <PortfolioFilter :data="portfolioItems" />
    </div>
    
    <!-- Loading State -->
    <div v-else class="container section-padding text-center">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <p>Loading portfolio items...</p>
        </div>
      </div>
    </div>

    <!-- Contact CTA Section -->
    <div class="container section-padding">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h3 class="title-h3 mb-30">Ready to Start Your Project?</h3>
          <p class="mb-30">
            Let's discuss how we can bring your vision to life with our expertise 
            in modern web technologies and innovative design solutions.
          </p>
          <LinkDefualt 
            linkClass="background-main" 
            :iconAwesome="['fas','arrow-right']" 
            popup 
            linkName="GET STARTED" 
            linkTo="/contact" 
            parallax 
          />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <DsnFooter light animate />
  </Layout>
</template>

<style scoped>
.title-h2 {
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.2;
}

.title-h3 {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .title-h2 {
    font-size: 2.5rem;
  }
  
  .title-h3 {
    font-size: 1.5rem;
  }
}
</style>