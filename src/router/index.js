import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    alias: '/apps',
    component: Home
  },
  {
    path: '/apps/:slug',
    name: 'WP Migrate SQL',
    component: () => import(/* webpackChunkName: "about" */ '../views/AppsPage.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
