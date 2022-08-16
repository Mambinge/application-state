import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EditUsers from '@/views/EditUsers.vue'
import CreateUser from '@/components/CreateUser.vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
import Dashboard from '@/components/shared/Dashboard.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: EditUsers
  },
  {
    path: '/create',
    name: 'Create',
    component: CreateUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
