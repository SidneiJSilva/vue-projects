import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from './boot/axios'
import firebase from './boot/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  firebase,
  render: h => h(App)
}).$mount('#app')
