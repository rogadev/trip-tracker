import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import TheFooter from './components/TheFooter.vue';

const app = createApp(App);
app.component('TheFooter', TheFooter);
app.use(router).mount('#app');
