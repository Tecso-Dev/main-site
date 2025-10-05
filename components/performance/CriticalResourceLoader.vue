<template>
  <div class="critical-resources-loader">
    <!-- Critical above-the-fold content here -->
    <slot name="critical" />
    
    <!-- Non-critical content loaded after -->
    <ClientOnly>
      <slot name="deferred" />
      <template #fallback>
        <div class="loading-placeholder">
          <div class="skeleton-loader"></div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// Critical resource loader for better Core Web Vitals
onMounted(() => {
  // Preload critical resources
  const criticalResources = [
    { href: '/images/logo-light.png', as: 'image', type: 'image/png' },
    { href: '/images/og-tecso-team.webp', as: 'image', type: 'image/webp' }
  ]

  criticalResources.forEach(resource => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource.href
    link.as = resource.as
    if (resource.type) {
      link.type = resource.type
    }
    document.head.appendChild(link)
  })

  // Defer non-critical CSS and JS
  nextTick(() => {
    // Load non-critical stylesheets
    const nonCriticalCSS = [
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css'
    ]

    nonCriticalCSS.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      link.media = 'print'
      link.onload = function() {
        (this as HTMLLinkElement).media = 'all'
      }
      document.head.appendChild(link)
    })
  })
})
</script>

<style>
.critical-resources-loader {
  min-height: 100vh;
}

.loading-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.skeleton-loader {
  width: 100%;
  max-width: 400px;
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Critical CSS for LCP optimization */
.hero-section {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 500;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.2rem);
  opacity: 0.8;
  line-height: 1.6;
}

/* Responsive optimizations */
@media (max-width: 768px) {
  .hero-section {
    min-height: 50vh;
    padding: 2rem 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
}
</style>