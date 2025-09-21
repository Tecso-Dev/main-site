// Lazy load Three.js only when needed
export const useThreeJS = () => {
  const isLoaded = ref(false)
  const isLoading = ref(false)

  const loadThreeJS = async () => {
    if (isLoaded.value || isLoading.value) {
      return
    }

    isLoading.value = true
    
    try {
      // Only load Three.js when actually needed
      await new Promise((resolve, reject) => {
        if (window.THREE) {
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = '/js/threejs.min.js'
        script.async = true
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      })
      
      isLoaded.value = true
    } catch (error) {
      console.error('Failed to load Three.js:', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoaded: readonly(isLoaded),
    isLoading: readonly(isLoading),
    loadThreeJS
  }
}