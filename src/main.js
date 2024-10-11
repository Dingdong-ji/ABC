import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(router).use(ElementPlus).use(pinia).mount('#app')
