import { createRouter, createWebHistory } from 'vue-router'
import CreateAgentView from '@/views/CreateAgentView.vue'
import ConfigureMessagesView from '@/views/ConfigureMessagesView.vue'
import StatsView from '@/views/StatsView.vue'

const routes = [
  {
    path: '/',
    redirect: '/create'
  },
  {
    path: '/create',
    name: 'CreateAgent',
    component: CreateAgentView,
    meta: {
      title: 'Crear Agente'
    }
  },
  {
    path: '/configure',
    name: 'ConfigureMessages', 
    component: ConfigureMessagesView,
    meta: {
      title: 'Configurar Mensajes'
    }
  },
  {
    path: '/stats',
    name: 'Stats',
    component: StatsView,
    meta: {
      title: 'Estadísticas'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `V-AI - ${to.meta.title}` : 'V-AI Platform'
  next()
})

export default router