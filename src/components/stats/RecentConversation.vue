<template>
  <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200">
    <div class="flex items-center gap-4">
      <div class="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
        {{ getUserInitials(user) }}
      </div>
      <div>
        <h4 class="font-semibold text-gray-800">{{ user }}</h4>
        <p class="text-sm text-gray-600">{{ topic }}</p>
      </div>
    </div>
    
    <div class="text-right">
      <div class="text-sm text-gray-500 mb-1">{{ time }}</div>
      <span :class="getStatusClasses(status)" class="text-xs px-3 py-1 rounded-full font-medium">
        {{ getStatusText(status) }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  user: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

const getUserInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const getStatusClasses = (status) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-700'
    case 'completed':
      return 'bg-blue-100 text-blue-700'
    case 'pending':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

const getStatusText = (status) => {
  const statusMap = {
    active: 'Activa',
    completed: 'Completada',
    pending: 'Pendiente'
  }
  return statusMap[status] || 'Desconocido'
}
</script>
