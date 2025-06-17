import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [ 
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'create-list',
    component: () => import('../views/CreateListView.vue'),
  },
  {
    path: '/list/:id',
    name: 'edit-list',
    component: () => import('../views/EditListView.vue'),
  }
],
})

export default router