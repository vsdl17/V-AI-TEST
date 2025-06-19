<template>
  <div class="w-full h-64">
    <canvas ref="chartCanvas" class="w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const chartCanvas = ref(null)
let chart = null

const createChart = () => {
  if (!chartCanvas.value || !props.data.length) return

  const ctx = chartCanvas.value.getContext('2d')
  const gradient = ctx.createLinearGradient(0, 0, 0, 200)
  gradient.addColorStop(0, 'rgba(102, 126, 234, 0.3)')
  gradient.addColorStop(1, 'rgba(102, 126, 234, 0.05)')

  const maxValue = Math.max(...props.data.map(d => d.value))
  const width = chartCanvas.value.width
  const height = chartCanvas.value.height
  const padding = 40

  ctx.clearRect(0, 0, width, height)
  
  ctx.strokeStyle = '#e5e7eb'
  ctx.lineWidth = 1
  for (let i = 0; i <= 5; i++) {
    const y = padding + (height - 2 * padding) * i / 5
    ctx.beginPath()
    ctx.moveTo(padding, y)
    ctx.lineTo(width - padding, y)
    ctx.stroke()
  }

  if (props.data.length > 1) {
    ctx.strokeStyle = '#667eea'
    ctx.lineWidth = 3
    ctx.beginPath()
    
    props.data.forEach((point, index) => {
      const x = padding + (width - 2 * padding) * index / (props.data.length - 1)
      const y = height - padding - (height - 2 * padding) * point.value / maxValue
      
      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    
    ctx.stroke()

    ctx.fillStyle = '#667eea'
    props.data.forEach((point, index) => {
      const x = padding + (width - 2 * padding) * index / (props.data.length - 1)
      const y = height - padding - (height - 2 * padding) * point.value / maxValue
      
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
    })
  }

  // lllabels
  ctx.fillStyle = '#6b7280'
  ctx.font = '12px Inter'
  ctx.textAlign = 'center'
  
  props.data.forEach((point, index) => {
    const x = padding + (width - 2 * padding) * index / (props.data.length - 1)
    ctx.fillText(point.label, x, height - 10)
  })
}

onMounted(() => {
  if (chartCanvas.value) {
    chartCanvas.value.width = chartCanvas.value.offsetWidth
    chartCanvas.value.height = chartCanvas.value.offsetHeight
    createChart()
  }
})

watch(() => props.data, () => {
  createChart()
}, { deep: true })
</script>
