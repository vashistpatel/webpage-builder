//Importing the router (some of this was automatically setup when creating the vu-project)

import { createRouter, createWebHistory } from 'vue-router'
//All the imports below are importing vue pages from /views/
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import builderPage from '../views/builderPage.vue'
import homepage from '../views/homepage.vue'
import stats from '../views/stats.vue'
import display from '../views/display.vue'
import FAQ from '../views/FAQ.vue'


//Routes created 
const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'Login',
    component: login

  },
  {
    path: '/builderPage',
    name: 'BuilderPage',
    component: builderPage

  },
  {
    path: '/display',
    name: 'Display',
    component: display

  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: homepage

  },
  {
    path: '/stats',
    name: 'Statistics',
    component: stats
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
