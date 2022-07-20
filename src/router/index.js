import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import waps from '../views/waps.vue'
import wapDetails from '../views/wap-details.vue'
import wapEditor from '../views/wap-editor.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/waps',
      name: 'waps',
      component: waps,
    },
    {
      path: '/wap/:wapId',
      name: 'wap-detials',
      component: wapDetails,
    },
    {
      path: '/wap/editor/:wapId',
      name: 'wap-editor',
      component: wapEditor,
    },
  ],
})

export default router
