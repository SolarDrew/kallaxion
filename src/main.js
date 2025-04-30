import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify';
import { Row, Column, Hidden } from 'vue-grid-responsive';

import PrimeVue from 'primevue/config';

import App from './App.vue';

const vuetify = createVuetify({})
const app = createApp(App);

app.use(vuetify)
app.component('row', Row);
app.component('column', Column);
app.component('hidden', Hidden);
app.use(PrimeVue)

app.mount('#app')
