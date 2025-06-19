import { defineStore } from 'pinia'
import { ref } from 'vue'
import { DEFAULT_RESPONSES } from '@/utils/constants'

export const useMessagesStore = defineStore('messages', () => {
  const responses = ref([...DEFAULT_RESPONSES])
  const isLoading = ref(false)

  const addResponse = async (responseData) => {
    isLoading.value = true
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const newResponse = {
        id: Date.now(),
        ...responseData,
        createdAt: new Date().toISOString()
      }
      
      responses.value.push(newResponse)
      return newResponse
    } finally {
      isLoading.value = false
    }
  }

  const updateResponse = async (id, updates) => {
    isLoading.value = true
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const index = responses.value.findIndex(response => response.id === id)
      if (index !== -1) {
        responses.value[index] = { ...responses.value[index], ...updates }
      }
    } finally {
      isLoading.value = false
    }
  }

  const deleteResponse = async (id) => {
    isLoading.value = true
    
    try {
      await new Promise(resolve => setTimeout(resolve, 300))
      responses.value = responses.value.filter(response => response.id !== id)
    } finally {
      isLoading.value = false
    }
  }

  const getResponseById = (id) => {
    return responses.value.find(response => response.id === id)
  }

  return {
    responses,
    isLoading,
    addResponse,
    updateResponse,
    deleteResponse,
    getResponseById
  }
})