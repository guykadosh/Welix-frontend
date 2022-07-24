import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import '@/assets/styles/styles.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Antd)

app.use(VueGoogleMaps, {
    load: {key: 'AIzaSyB2LvYaoUdowiLafGevBgmTajpfYiEAj4o'},
})

app.mount('#app')
