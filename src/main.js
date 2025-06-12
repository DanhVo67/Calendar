import { createApp } from 'vue';
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue';
import router from './router';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia()
const vuetify = createVuetify({
  components,
  directives,
})
import vtl from './plugins/vuetify';
createApp(App).use(router).use(vtl).use(vuetify).use(pinia).mount('#app')
