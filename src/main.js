import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import Vuelidate from 'vuelidate'
import './registerServiceWorker'
Vue.config.productionTip = false;

Vue.use(Vuelidate)
axios.defaults.baseURL = 'http://127.0.0.1:5000/api'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
