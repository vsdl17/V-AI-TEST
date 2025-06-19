<template>
  <div class="bg-gradient-primary min-h-screen font-inter">
    <div class="max-w-6xl mx-auto p-5">
      <!-- Header -->
      <div class="glassmorphism rounded-2xl p-6 mb-8 card-shadow">
        <h1 class="text-3xl font-extrabold text-gradient mb-2">V-AI</h1>
        <p class="text-gray-600 text-lg">Plataforma de Configuración de Agentes IA</p>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex flex-wrap gap-3 mb-8">
        <button
          :class="tabClass('create')"
          @click="activeTab = 'create'"
        >
          Crear Agente
        </button>
        <button
          :class="tabClass('configure')"
          @click="activeTab = 'configure'"
        >
          Configurar Mensajes
        </button>
        <button
          :class="tabClass('stats')"
          @click="activeTab = 'stats'"
        >
          Estadísticas
        </button>
      </div>

      <!-- Vista 1 -->
      <div v-if="activeTab === 'create'" class="view fade-in">
        <div class="glassmorphism rounded-3xl p-8 card-shadow border border-white border-opacity-20">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Crear Nuevo Agente IA</h2>
          
          <div class="space-y-6">
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Nombre del Agente</label>
              <input v-model="agentName" type="text" placeholder="Ej: Asistente de Ventas"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-300">
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">Descripción</label>
              <textarea rows="3" placeholder="Describe el propósito y función de tu agente IA"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-300 resize-none"></textarea>
            </div>

            <button @click="createAgent"
              class="bg-gradient-primary text-white font-semibold px-8 py-4 rounded-xl hover-lift transition-all duration-300 btn-shadow">
              Crear Agente
            </button>
          </div>
        </div>
      </div>

      <!-- Vista 2 -->
      <div v-if="activeTab === 'configure'" class="view fade-in">
        <div class="glassmorphism rounded-3xl p-8 card-shadow border border-white border-opacity-20">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Configurar Mensajes y Respuestas</h2>
          <!-- Puedes replicar el resto de tu HTML aquí -->
        </div>
      </div>

      <!-- Vista 3 -->
      <div v-if="activeTab === 'stats'" class="view fade-in">
        <div class="glassmorphism rounded-3xl p-8 card-shadow border border-white border-opacity-20">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Estadísticas</h2>
          <!-- Agrega el contenido de las estadísticas aquí -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'create',
      agentName: '',
    }
  },
  methods: {
    tabClass(tab) {
      return [
        'tab-btn text-white font-semibold px-6 py-3 rounded-full transition-all duration-300',
        this.activeTab === tab ? 'glassmorphism text-blue-600 tab-shadow' : 'glassmorphism-light'
      ];
    },
    createAgent() {
      if (this.agentName.trim() !== '') {
        alert(`¡Agente "${this.agentName}" creado exitosamente!`);
        this.agentName = '';
      } else {
        alert('Por favor, ingresa un nombre para el agente.');
      }
    }
  }
}
</script>

<style scoped>
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.text-gradient {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.glassmorphism {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.glassmorphism-light {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.tab-shadow {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.card-shadow {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
.btn-shadow {
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}
.btn-shadow:hover {
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}
.hover-lift:hover {
  transform: translateY(-2px);
}
.fade-in {
  animation: fadeIn 0.5s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
