import { createRouter, createWebHistory } from 'vue-router'
import ViewEmployees from '../views/ViewEmployees.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewEmployees
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddEmployee.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/UpdateEmployee.vue')
    }
  ]
})

export default router
