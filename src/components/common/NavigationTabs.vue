<template>
  <div class="flex flex-wrap gap-3 mb-8">
    <router-link
      v-for="tab in navigationTabs"
      :key="tab.id"
      :to="tab.route"
      :class="getTabClasses(tab.route)"
      class="font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
    >
      {{ tab.label }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { NAVIGATION_TABS } from '@/utils/constants'

const route = useRoute()
const navigationTabs = NAVIGATION_TABS

const getTabClasses = (tabRoute) => {
  const isActive = route.path === tabRoute
  const baseClasses = 'font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-1'
  
  if (isActive) {
    return 'glassmorphism text-blue-600 tab-shadow'
  }
  return 'glassmorphism-light text-white hover:bg-white hover:bg-opacity-30'
}
</script>