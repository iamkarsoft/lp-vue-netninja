import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Routes from './routes'
Vue.config.productionTip = false

Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
})

Vue.filter('snippet',function(value){
  return value.slice(0,100)+'...'
})

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
