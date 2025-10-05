<template>
  <nav class="breadcrumb-navigation" aria-label="Breadcrumb">
    <ol class="breadcrumb-list" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li 
        v-for="(item, index) in breadcrumbs" 
        :key="index"
        class="breadcrumb-item"
        :class="{ 'is-active': index === breadcrumbs.length - 1 }"
        itemprop="itemListElement" 
        itemscope 
        itemtype="https://schema.org/ListItem"
      >
        <NuxtLink 
          v-if="item.to && index !== breadcrumbs.length - 1"
          :to="item.to"
          class="breadcrumb-link"
          itemprop="item"
        >
          <span itemprop="name">{{ item.name }}</span>
        </NuxtLink>
        <span 
          v-else 
          class="breadcrumb-current"
          itemprop="item"
          :aria-current="index === breadcrumbs.length - 1 ? 'page' : null"
        >
          <span itemprop="name">{{ item.name }}</span>
        </span>
        <meta itemprop="position" :content="index + 1" />
        <span v-if="index < breadcrumbs.length - 1" class="breadcrumb-separator" aria-hidden="true">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  name: string
  to?: string
}

interface Props {
  breadcrumbs: BreadcrumbItem[]
}

defineProps<Props>()
</script>

<style scoped>
.breadcrumb-navigation {
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb-link {
  color: var(--text-color-secondary, #666);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: var(--primary-color, #007bff);
  text-decoration: underline;
}

.breadcrumb-current {
  color: var(--text-color-primary, #333);
  font-weight: 500;
}

.breadcrumb-separator {
  color: var(--text-color-muted, #999);
  user-select: none;
}

.is-active .breadcrumb-current {
  color: var(--primary-color, #007bff);
}

/* RTL Support */
[dir="rtl"] .breadcrumb-list {
  direction: rtl;
}

[dir="rtl"] .breadcrumb-separator::before {
  content: "\\";
}
</style>