<template>
  <div class="bg-white bg-opacity-90 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover-lift">
    <div class="flex justify-between items-start mb-3">
      <h4 class="text-lg font-semibold text-gray-800">{{ title }}</h4>
      <div class="flex gap-2">
      </div>
    </div>
    <p class="text-gray-600 leading-relaxed">{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: [String, Number],
    default: null
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

defineEmits(['edit', 'delete'])
</script>
