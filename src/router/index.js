import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import wapDetails from '../views/wap-details.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
  ],
})

export default router
