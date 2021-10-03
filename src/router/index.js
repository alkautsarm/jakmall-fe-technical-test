import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import CartDelivery from '../views/cart/CartDelivery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart/delivery',
    name: 'CartDelivery',
    component: CartDelivery
  },
  {
    path: '/cart/payment',
    name: 'CartPayment',
    component: Home
  },
  {
    path: '/cart/finish',
    name: 'CartFinish',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
