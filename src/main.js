import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { clickOutsideDirective } from './directives'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  // faPenToSquare,
  // faPalette, faCirclePlus, faDisplay,
  // faMobile, faTabletScreen, faShare,
  // faFloppyDisk, faTrash, faCopy, faGem,
  // faHandsHoldingCircle, faPeopleGroup,
  // faLock, faArrowLeft, faXmarkLarge,
  // faPlusLarge, faCircle, faPlus
  faPenToSquare,
  faPalette,
  faCirclePlus,
  faDisplay,
  faMobile,
  faTabletScreen,
  faShare,
  faFloppyDisk,
  faTrash,
  faCopy,
  faGem,
  faHandsHoldingCircle,
  faPeopleGroup,
  faLock,
  faArrowLeft,
  faXmarkLarge,
  faPlusLarge,
  faAirplay,
  faCircle,
  faPlus,
  faBars,
  faCalendarCirclePlus,
  faSidebar,
  faEye,
  faUsers,
  faMoneyBillTransfer,
  faBadgeCheck,
} from '@fortawesome/pro-light-svg-icons'
import Notifications from '@kyvg/vue3-notification'

// import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

import '@/assets/styles/styles.scss'

const app = createApp(App)
// library.add(faPenToSquare, faPalette, faCirclePlus,
//   faDisplay, faMobile, faTabletScreen, faShare,
//   faFloppyDisk, faTrash, faCopy, faGem,
//   faHandsHoldingCircle, faPeopleGroup, faLock,
//   faArrowLeft, faXmarkLarge, faPlusLarge, faCircle, faPlus
library.add(
  faPenToSquare,
  faPalette,
  faCirclePlus,
  faDisplay,
  faMobile,
  faTabletScreen,
  faShare,
  faFloppyDisk,
  faTrash,
  faCopy,
  faGem,
  faHandsHoldingCircle,
  faPeopleGroup,
  faLock,
  faArrowLeft,
  faXmarkLarge,
  faPlusLarge,
  faAirplay,
  faCircle,
  faPlus,
  faBars,
  faCalendarCirclePlus,
  faSidebar,
  faEye,
  faUsers,
  faMoneyBillTransfer,
  faBadgeCheck
)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.use(Antd)
app.use(Notifications)
app.directive('click-outside', clickOutsideDirective)
app.use(VueLoading)
app.use(VueGoogleMaps, {
  load: { key: 'AIzaSyB2LvYaoUdowiLafGevBgmTajpfYiEAj4o' },
})

app.mount('#app')
