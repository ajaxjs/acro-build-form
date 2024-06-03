import { createApp } from 'vue'
import App from './App.vue'

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import ArcoComps from '../packages'

const app = createApp(App)

app.use(ArcoVue);
app.use(ArcoComps);

app.mount('#app')
