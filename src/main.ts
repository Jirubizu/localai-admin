import {createApp} from 'vue'
import App from './App.vue'
import JsonViewer from 'vue3-json-viewer'
import {createVfm} from 'vue-final-modal'
import {createPinia} from 'pinia'
// import VueVirtualScroller from 'vue-virtual-scroller'
import { RecycleScroller } from 'vue-virtual-scroller'
// ---- CSS -----
import './style.css'
import "vue3-json-viewer/dist/index.css";
import 'vue-final-modal/style.css'

import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
const app = createApp(App)
const vfm = createVfm()
const store = createPinia()
// app.use(VueSidebarMenu)


// app.use(VueVirtualScroller)
app.use(JsonViewer);
app.use(vfm)
app.use(store)
app.component('RecycleScroller', RecycleScroller)
app.mount('#app')
