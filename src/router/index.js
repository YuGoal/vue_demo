import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/Login'//登录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },//登录
  ]
})
