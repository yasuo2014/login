import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
