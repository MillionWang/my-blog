/*
 * @File: 
 * @Author: wangzhongpeng
 * @Date: 2019-07-31 20:13:23
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.prototype.$axios = axios.create({
  baseURL: 'http://172.18.22.63:8081'
});

Vue.config.productionTip = false;

window.vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app');
