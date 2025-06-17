import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // pastikan file ini benar

const app = createApp(App)

app.use(router) // WAJIB! Ini mengaktifkan Vue Router
app.mount('#app')