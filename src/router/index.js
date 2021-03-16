import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Showing from '../views/Showing.vue';
import Theater from '../views/Theater.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/showing',
    name: 'Showing',
    component: Showing
  },

  {
    path: '/theater',
    name: 'Theater',
    component: Theater
  },



  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
