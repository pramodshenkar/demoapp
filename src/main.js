import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/store'


Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
  router: router
}).$mount('#app')
