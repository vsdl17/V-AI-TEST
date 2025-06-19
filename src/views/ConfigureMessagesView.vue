<template>
  <div>
    <AppHeader />
    <NavigationTabs />
    
    <div class="glassmorphism rounded-3xl p-8 card-shadow border border-white border-opacity-20 fade-in">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Configurar Mensajes y Respuestas</h2>
      
      <div class="space-y-4 mb-6">
        <ResponseMessage
          v-for="response in responses"
          :key="response.id"
          :title="response.title"
          :message="response.message"
          @edit="handleEditResponse"
          @delete="handleDeleteResponse"
        />
      </div>

      <div 
        @click="handleAddResponse"
        class="bg-blue-50 border-2 border-dashed border-blue-400 rounded-xl p-8 text-center cursor-pointer hover:bg-blue-100 transition-all duration-300"
      >
        <div class="text-3xl mb-3">+</div>
        <div class="text-blue-600 font-semibold">Agregar Nueva Respuesta</div>
      </div>

      <div class="mt-8">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Configuración Avanzada</h3>
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="feature in advancedFeatures"
            :key="feature"
            @click="handleAdvancedFeature(feature)"
            class="bg-white bg-opacity-80 text-blue-600 font-semibold px-6 py-3 border-2 border-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            {{ feature }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppHeader from '@/components/common/AppHeader.vue'
import NavigationTabs from '@/components/common/NavigationTabs.vue'
import ResponseMessage from '@/components/messages/ResponseMessage.vue'
import { useMessagesStore } from '@/stores/messages.js'

const messagesStore = useMessagesStore()

const responses = computed(() => messagesStore.responses)

const advancedFeatures = [
  'Entrenar con Documentos',
  'Configurar Integraciones', 
  'Establecer Límites'
]

const handleAddResponse = () => {
  const title = prompt('Título de la respuesta:')
  const message = prompt('Mensaje de respuesta:')
  
  if (title && message) {
    messagesStore.addResponse({ title, message })
  }
}

const handleEditResponse = (id) => {
  console.log('Editar respuesta:', id)
}

const handleDeleteResponse = (id) => {
  if (confirm('¿Estás seguro de eliminar esta respuesta?')) {
    messagesStore.deleteResponse(id)
  }
}

const handleAdvancedFeature = (feature) => {
  alert(`Funcionalidad: ${feature} - En desarrollo`)
}
</script>