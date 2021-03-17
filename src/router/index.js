import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Showing from '../views/Showing.vue';
import Theater from '../views/Theater.vue';
import Admin from '../views/Admin.vue';


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
    path: '/admin',
    name: 'Admin',
    component: Admin
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
