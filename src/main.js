import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap'
// import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const app = createApp(App)
app.use(router)
app.use(bootstrap)
// app.use(Vuetify)
app.mount('#app')
