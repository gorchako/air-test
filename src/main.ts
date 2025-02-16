import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import vueClickOutsideElement from 'vue-click-outside-element'
import { vMaska } from "maska/vue"

import App from './App.vue'

const vfm = createVfm()

createApp(App)
    .use(vfm)
    .use(vueClickOutsideElement)
    .directive("maska", vMaska)
    .mount('#app')
