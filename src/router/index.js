import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue' // pastikan file ini juga ada

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Tambahkan rute lain jika perlu
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
