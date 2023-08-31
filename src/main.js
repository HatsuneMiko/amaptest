import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import AMapLoader from '@amap/amap-jsapi-loader'
// Vue.use(AMapLoader)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
