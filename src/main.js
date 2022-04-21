import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/npm install bootstrap@4.0.0';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
