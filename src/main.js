import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import axios from 'axios';
import './registerServiceWorker'
import {
  store
} from './store/store';

Vue.config.productionTip = false;

Vue.use(Vuelidate)
axios.defaults.baseURL = 'http://127.0.0.1:5000/api'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');