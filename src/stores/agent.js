import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAgentStore = defineStore('agent', () => {
  const agents = ref([])
  const currentAgent = ref(null)
  const isLoading = ref(false)

  const createAgent = async (agentData) => {
    isLoading.value = true
    
    try {
      // simular llamada API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const newAgent = {
        id: Date.now(),
        ...agentData,
        createdAt: new Date().toISOString(),
        status: 'active',
        conversationsCount: 0
      }
      
      agents.value.push(newAgent)
      currentAgent.value = newAgent
      
      return newAgent
    } catch (error) {
      throw new Error('Error al crear el agente')
    } finally {
      isLoading.value = false
    }
  }

  const updateAgent = async (id, updates) => {
    isLoading.value = true
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const index = agents.value.findIndex(agent => agent.id === id)
      if (index !== -1) {
        agents.value[index] = { ...agents.value[index], ...updates }
        if (currentAgent.value?.id === id) {
          currentAgent.value = agents.value[index]
        }
      }
    } finally {
      isLoading.value = false
    }
  }

  const deleteAgent = async (id) => {
    isLoading.value = true
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800))
      
      agents.value = agents.value.filter(agent => agent.id !== id)
      if (currentAgent.value?.id === id) {
        currentAgent.value = null
      }
    } finally {
      isLoading.value = false
    }
  }

  const getAgentById = (id) => {
    return agents.value.find(agent => agent.id === id)
  }

  return {
    agents,
    currentAgent,
    isLoading,
    createAgent,
    updateAgent,
    deleteAgent,
    getAgentById
  }
})