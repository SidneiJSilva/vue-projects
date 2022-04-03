import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/btc',
    name: 'BTC',
    component: () => import(/* webpackChunkName: "about" */ '../views/Btc.vue')
  },
  {
    path: '/calc',
    name: 'Calc',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calc.vue')
  },
  {
    path: '/hash',
    name: 'Hash',
    component: () => import(/* webpackChunkName: "about" */ '../views/Hash.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
