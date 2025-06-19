<template>
  <div>
    <AppHeader />
    <NavigationTabs />
    
    <div class="glassmorphism rounded-3xl p-8 card-shadow border border-white border-opacity-20 fade-in">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Crear Nuevo Agente IA</h2>
      
      <form @submit.prevent="handleCreateAgent" class="space-y-6">
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Nombre del Agente</label>
          <input 
            v-model="agentForm.name"
            type="text" 
            placeholder="Ej: Asistente de Ventas" 
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-300"
            required
          >
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2">Descripción</label>
          <textarea 
            v-model="agentForm.description"
            rows="3" 
            placeholder="Describe el propósito y función de tu agente IA"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-300 resize-none"
          ></textarea>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Tipo de Agente</label>
            <select 
              v-model="agentForm.type"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-300"
            >
              <option v-for="type in agentTypes" :key="type" :value="type">
                {{ type }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">Personalidad</label>
            <select 
              v-model="agentForm.personality"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-300"
            >
              <option v-for="personality in personalities" :key="personality" :value="personality">
                {{ personality }}
              </option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2">Idioma Principal</label>
          <select 
            v-model="agentForm.language"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-300"
          >
            <option v-for="language in languages" :key="language" :value="language">
              {{ language }}
            </option>
          </select>
        </div>

        <button 
          type="submit"
          :disabled="isCreating"
          class="bg-gradient-primary text-white font-semibold px-8 py-4 rounded-xl hover-lift transition-all duration-300 btn-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isCreating ? 'Creando...' : 'Crear Agente' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/common/AppHeader.vue'
import NavigationTabs from '@/components/common/NavigationTabs.vue'
import { useAgentStore } from '@/stores/agent'
import { AGENT_TYPES, PERSONALITIES, LANGUAGES } from '@/utils/constants'

const agentStore = useAgentStore()

const agentForm = ref({
  name: '',
  description: '',
  type: AGENT_TYPES[0],
  personality: PERSONALITIES[0], 
  language: LANGUAGES[0]
})

const isCreating = ref(false)
const agentTypes = AGENT_TYPES
const personalities = PERSONALITIES
const languages = LANGUAGES

const handleCreateAgent = async () => {
  if (!agentForm.value.name.trim()) {
    alert('Por favor, ingresa un nombre para el agente.')
    return
  }

  isCreating.value = true
  
  try {
    await agentStore.createAgent(agentForm.value)
    alert(`¡Agente "${agentForm.value.name}" creado exitosamente!`)
    
    // reset
    agentForm.value = {
      name: '',
      description: '',
      type: AGENT_TYPES[0],
      personality: PERSONALITIES[0],
      language: LANGUAGES[0]
    }
  } catch (error) {
    alert('Error al crear el agente. Inténtalo de nuevo.')
  } finally {
    isCreating.value = false
  }
}
</script>
