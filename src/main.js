import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify';
import { Row, Column, Hidden } from 'vue-grid-responsive';

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button";
import DataView from 'primevue/dataview';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

import App from './App.vue';

const vuetify = createVuetify({})
const app = createApp(App);

app.use(vuetify)
app.component('row', Row);
app.component('column', Column);
app.component('hidden', Hidden);
app.use(PrimeVue, {theme: {preset: Aura}})

app.component('Button', Button);
app.component('DataView', DataView);
app.component('InputText', InputText);

app.mount('#app')
