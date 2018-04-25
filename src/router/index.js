import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ViewProfile from '@/pages/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/viewProfile',
      name: 'viewProfile',
      component: ViewProfile
    }
  ]
})
