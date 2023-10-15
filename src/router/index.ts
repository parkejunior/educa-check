import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/StudentsView.vue')
    },
    {
      path: '/students/create',
      name: 'create-student',
      component: () => import('../views/CreateStudentView.vue')
    },
    {
      path: '/diaries',
      name: 'diaries',
      component: () => import('../views/DiariesView.vue')
    },
    {
      path: '/diaries/write',
      name: 'write-diary',
      component: () => import('../views/WriteDiaryView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
  ]
})

export default router
