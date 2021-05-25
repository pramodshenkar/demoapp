import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
  state() {
    return {
      todos: [
        { id: 1, task: "wakeup early", done: true },
        { id: 2, task: "do breakfast", done: true },
        { id: 3, task: "end  task", done: true },
        { id: 4, task: "goto office", done: false },
        { id: 5, task: "submit project", done: false },
      ]
    }
  },
  getters: {
    doneTodosCount(state) {
      return state.todos.filter((todo) => todo.done).length;
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
