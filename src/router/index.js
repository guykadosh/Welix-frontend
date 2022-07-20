import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import wapDetails from '../views/wap-details.vue'
import wapEditor from '../views/wapEditor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/wap/:wapId',
      name: 'wap-detials',
      component: wapDetails,
    },
    {
      path: '/wap/editor',
      name: 'wap-editor',
      component: wapEditor,
    },
  ],
})

export default router
