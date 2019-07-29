import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'

Vue.use(ElementUI);
Vue.use(VueAxios, axios);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
