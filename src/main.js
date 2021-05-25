import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
  state() {
    return {
      count: 23
    }
  },
  mutations: {
    increment(state, obj) {
      state.count = state.count + obj.amount
    }
  }
})

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
