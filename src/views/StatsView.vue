<template>
  <div>
    <AppHeader />
    <NavigationTabs />
    
    <div class="fade-in">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard
          v-for="stat in stats"
          :key="stat.label"
          :value="stat.value"
          :label="stat.label"
          :trend="stat.trend"
        />
      </div>

      <div class="glassmorphism rounded-3xl p-8 card-shadow border border-white border-opacity-20 mb-6">
        <h3 class="text-xl font-bold text-gray-800 mb-5">Actividad de Conversaciones</h3>
        <ConversationChart :data="chartData" />
      </div>

      <div class="bg-white rounded-2xl p-6 card-shadow">
        <h3 class="text-xl font-bold text-gray-800 mb-5">Conversaciones Recientes</h3>
        
        <div class="space-y-4">
          <RecentConversation
            v-for="conversation in recentConversations"
            :key="conversation.id"
            :user="conversation.user"
            :topic="conversation.topic"
            :time="conversation.time"
            :status="conversation.status"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import AppHeader from '@/components/common/AppHeader.vue'
import NavigationTabs from '@/components/common/NavigationTabs.vue'
import StatCard from '@/components/common/StatCard.vue'
import ConversationChart from '@/components/stats/ConversationChart.vue'
import RecentConversation from '@/components/stats/RecentConversation.vue'
import { useStatsStore } from '@/stores/stats.js'

const statsStore = useStatsStore()

const stats = computed(() => statsStore.stats)
const chartData = computed(() => statsStore.chartData)
const recentConversations = computed(() => statsStore.recentConversations)

onMounted(() => {
  statsStore.loadStats()
})
</script>