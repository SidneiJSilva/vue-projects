import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from './boot/axios'
import firebase from './boot/firebase'
import VueSpinners from './boot/spinners'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  firebase,
  VueSpinners,
  render: h => h(App)
}).$mount('#app')
