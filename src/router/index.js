import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import wapList from '../views/wap-list.vue'
import wapDetails from '../views/wap-details.vue'
import wapEditor from '../views/wap-editor.vue'
import loginPage from '../views/login-page.vue'
import signupPage from '../views/signup-page.vue'
import dashboard from '../views/dashboard.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/template',
      name: 'wap-list',
      component: wapList,
    },
    {
      path: '/wap/:wapId',
      name: 'wap-detials',
      component: wapDetails,
    },
    {
      path: '/wap/editor/:wapId?',
      name: 'wap-editor',
      component: wapEditor,
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage,
    },
    {
      path: '/signup',
      name: 'signup',
      component: signupPage,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
  ],
})

export default router
