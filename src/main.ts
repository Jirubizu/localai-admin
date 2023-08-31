import {createApp} from 'vue'
import App from './App.vue'
import JsonViewer from 'vue3-json-viewer'
import {createVfm} from 'vue-final-modal'
import {createPinia} from 'pinia'
import { RecycleScroller } from 'vue-virtual-scroller'
import * as ConfirmDialog from 'vuejs-confirm-dialog'
import Notifications from 'notiwind'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as Icons from "oh-vue-icons/icons";
// ---- CSS -----
import './style.css'
import "vue3-json-viewer/dist/index.css";
import 'vue-final-modal/style.css'

import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const Fa = Object.values({ ...Icons });
addIcons(...Fa);


const app = createApp(App)
const vfm = createVfm()
const store = createPinia()

app.use(JsonViewer)
app.use(Notifications)
app.use(vfm)
app.use(store)
app.use(ConfirmDialog)
app.component("v-icon", OhVueIcon);
app.component('RecycleScroller', RecycleScroller)
app.mount('#app')
