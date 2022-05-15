import Vue from 'vue'
import App from './App.vue';
import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex);

Vue.config.productionTip = false
import element from './components/element'
Vue.use(element)
import '@/assets/common.css'

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
