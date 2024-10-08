import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "./routes/test.ts";
import 'virtual:uno.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
app.use(router)
app.use(createPinia().use(piniaPluginPersistedstate))
app.mount('#app')
