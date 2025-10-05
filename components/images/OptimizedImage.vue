<template>
  <NuxtImg 
    :src="src"
    :alt="computedAlt"
    :width="width"
    :height="height"
    :loading="loading"
    :class="imgClass"
    :sizes="sizes"
    :format="format"
    :quality="quality"
    :placeholder="placeholder"
    @load="onLoad"
    @error="onError"
  />
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  loading?: 'lazy' | 'eager'
  class?: string | object
  sizes?: string
  format?: string
  quality?: number
  placeholder?: string | boolean
  context?: 'portfolio' | 'team' | 'service' | 'blog' | 'hero' | 'logo' | 'general'
}

const props = withDefaults(defineProps<Props>(), {
  loading: 'lazy',
  quality: 85,
  format: 'webp',
  context: 'general'
})

const emit = defineEmits<{
  load: [event: Event]
  error: [event: Event]
}>()

// Generate better alt text based on context if not provided
const computedAlt = computed(() => {
  if (props.alt) return props.alt
  
  // Extract filename for fallback description
  const filename = props.src.split('/').pop()?.split('.')[0] || ''
  
  // Generate contextual alt text
  switch (props.context) {
    case 'portfolio':
      return `Tecso Team portfolio project - ${filename.replace(/[-_]/g, ' ')}`
    case 'team':
      return `Tecso Team member - ${filename.replace(/[-_]/g, ' ')}`
    case 'service':
      return `Tecso Team service illustration - ${filename.replace(/[-_]/g, ' ')}`
    case 'blog':
      return `Blog post image - ${filename.replace(/[-_]/g, ' ')}`
    case 'hero':
      return `Tecso Team - Iranian IT company hero image`
    case 'logo':
      return `Tecso Team logo - Iranian software development company`
    default:
      return `Tecso Team image - ${filename.replace(/[-_]/g, ' ')}`
  }
})

const imgClass = computed(() => {
  return [
    props.class,
    'tecso-img',
    `tecso-img--${props.context}`
  ]
})

const onLoad = (event: Event) => {
  emit('load', event)
}

const onError = (event: Event) => {
  console.warn(`Failed to load image: ${props.src}`)
  emit('error', event)
}
</script>

<style scoped>
.tecso-img {
  max-width: 100%;
  height: auto;
}

.tecso-img--hero {
  width: 100%;
  object-fit: cover;
}

.tecso-img--portfolio {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tecso-img--team {
  border-radius: 50%;
  object-fit: cover;
}

.tecso-img--logo {
  object-fit: contain;
}

.tecso-img--service {
  border-radius: 6px;
}

/* Loading placeholder */
.tecso-img[data-loading="true"] {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>