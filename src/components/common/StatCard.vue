<template>
  <div class="glassmorphism rounded-2xl p-6 card-shadow border border-white border-opacity-20 hover-lift-more transition-all duration-300">
    <div class="flex items-center justify-between mb-3">
      <div class="text-3xl font-bold text-gradient">{{ value }}</div>
      <div :class="getTrendClasses" class="text-sm font-semibold flex items-center gap-1">
        <svg v-if="trend > 0" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17l9.2-9.2M17 17V7H7"></path>
        </svg>
        <svg v-else-if="trend < 0" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7l-9.2 9.2M7 7v10h10"></path>
        </svg>
        <span>{{ Math.abs(trend) }}%</span>
      </div>
    </div>
    <p class="text-gray-600 font-medium">{{ label }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: [String, Number],
    required: true
  },
  label: {
    type: String,
    required: true
  },
  trend: {
    type: Number,
    default: 0
  }
})

const getTrendClasses = computed(() => {
  if (props.trend > 0) return 'text-green-600'
  if (props.trend < 0) return 'text-red-600'
  return 'text-gray-500'
})
</script>
