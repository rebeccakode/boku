import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ViewProfile from '@/pages/Profile'
import GenerateReport from '@/pages/GenerateReport'
import ViewHistory from '@/pages/ViewHistory'
import  UpdateEmployeeInfo from '@/pages/UpdateEmployeeInfo'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: 'viewProfile',
      name: 'viewProfile',
      component: ViewProfile
    },
    {
      path: 'generateReport',
      name: 'generateReport',
      component: GenerateReport
    },


    {
      path: 'updateInfo',
      name: 'updateInfo',
      component: UpdateEmployeeInfo
    },


  ]
})
