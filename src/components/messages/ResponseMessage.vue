<template>
  <div class="bg-white bg-opacity-90 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover-lift">
    <div class="flex justify-between items-start mb-3">
      <h4 class="text-lg font-semibold text-gray-800">{{ title }}</h4>
      <div class="flex gap-2">
        <button 
          @click="$emit('edit', id)"
          class="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
          title="Editar"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        </button>
        <button 
          @click="$emit('delete', id)"
          class="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
          title="Eliminar"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <p class="text-gray-600 leading-relaxed">{{ message }}</p>
    <div class="mt-4 text-sm text-gray-500">
      <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Respuesta automática</span>
    </div>
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