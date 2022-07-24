import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faPenToSquare, faPalette, faCirclePlus, faDisplay, faMobile, faTabletScreen, faShare } from '@fortawesome/pro-thin-svg-icons'
import { faPenToSquare, faPalette, faCirclePlus, faDisplay, faMobile, faTabletScreen, faShare, faFloppyDisk } from '@fortawesome/pro-light-svg-icons'

import '@/assets/styles/styles.scss'

const app = createApp(App)
library.add(faPenToSquare, faPalette, faCirclePlus, faDisplay, faMobile, faTabletScreen, faShare, faFloppyDisk)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.use(Antd)

app.use(VueGoogleMaps, {
    load: { key: 'AIzaSyB2LvYaoUdowiLafGevBgmTajpfYiEAj4o' },
})

app.mount('#app')
