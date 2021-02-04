import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from '../views/Dashboard.vue';
import { auth } from '../firebase.js';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// navigation guard to check for logged in users

// If the route has the requiresAuth meta property set to true and the user is not logged in, redirect them to the login view. 
// If the route has the requiresAuth meta property set to true and and the user is logged in, send them to the route they are attempting to visit. 
// Or else, you can send them to the route they are trying to visit; this only fires if the route doesn't require authentication.


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
