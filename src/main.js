import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify';
import App from './App.vue'
import { Row, Column, Hidden } from 'vue-grid-responsive';

const vuetify = createVuetify({})
const app = createApp(App);
app.use(vuetify)
app.component('row', Row);
app.component('column', Column);
app.component('hidden', Hidden);
app.mount('#app')
