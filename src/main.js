// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Qs from 'qs'



var axiosInstance = axios.create({
  baseURL: 'http://192.168.1.111:8080/',
  transformRequest: function (data) {
    return Qs.stringify(data)
  },
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axiosInstance)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
