export const AGENT_TYPES = [
  'Atención al Cliente',
  'Ventas', 
  'Soporte Técnico',
  'Marketing',
  'Personalizado'
]

export const PERSONALITIES = [
  'Amigable y Casual',
  'Profesional y Formal', 
  'Técnico y Preciso',
  'Empático y Comprensivo'
]

export const LANGUAGES = [
  'Español',
  'Inglés', 
  'Multiidioma'
]

export const NAVIGATION_TABS = [
  { id: 'create', label: 'Crear Agente', route: '/create' },
  { id: 'configure', label: 'Configurar Mensajes', route: '/configure' },
  { id: 'stats', label: 'Estadísticas', route: '/stats' }
]

export const DEFAULT_RESPONSES = [
  {
    id: 1,
    title: 'Saludo inicial',
    message: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?'
  },
  {
    id: 2, 
    title: 'Consulta sobre precios',
    message: 'Te puedo ayudar con información sobre nuestros precios. ¿Qué producto te interesa?'
  },
  {
    id: 3,
    title: 'Despedida', 
    message: '¡Gracias por contactarnos! Si necesitas más ayuda, no dudes en escribirme.'
  }
]