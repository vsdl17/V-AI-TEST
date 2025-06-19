import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatsStore = defineStore('stats', () => {
  const stats = ref([
    { value: '1,234', label: 'Total Conversaciones', trend: 12 },
    { value: '89%', label: 'Satisfacción', trend: 5 },
    { value: '156', label: 'Usuarios Activos', trend: -3 },
    { value: '2.4s', label: 'Tiempo Respuesta', trend: -15 }
  ])

  const chartData = ref([
    { label: 'Lun', value: 120 },
    { label: 'Mar', value: 140 },
    { label: 'Mié', value: 180 },
    { label: 'Jue', value: 160 },
    { label: 'Vie', value: 200 },
    { label: 'Sáb', value: 150 },
    { label: 'Dom', value: 100 }
  ])

  const recentConversations = ref([
    {
      id: 1,
      user: 'María González',
      topic: 'Consulta sobre precios',
      time: 'hace 5 min',
      status: 'active'
    },
    {
      id: 2,
      user: 'Carlos Ruiz',
      topic: 'Soporte técnico',
      time: 'hace 15 min',
      status: 'completed'
    },
    {
      id: 3,
      user: 'Ana Martínez',
      topic: 'Información de productos',
      time: 'hace 1 hora',
      status: 'pending'
    },
    {
      id: 4,
      user: 'Luis Herrera',
      topic: 'Proceso de compra',
      time: 'hace 2 horas',
      status: 'completed'
    }
  ])

  const isLoading = ref(false)

  const loadStats = async () => {
    isLoading.value = true
    
    try {
      // carga de datos
      await new Promise(resolve => setTimeout(resolve, 1000))
      
    } finally {
      isLoading.value = false
    }
  }

  const updateStats = (newStats) => {
    stats.value = newStats
  }

  const updateChartData = (newData) => {
    chartData.value = newData
  }

  return {
    stats,
    chartData,
    recentConversations,
    isLoading,
    loadStats,
    updateStats,
    updateChartData
  }
})