import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)
const counterModule = {
  namespaced: true,
  state() {
    return {
      count: 0,
    }
  },
  getters: {
    counterPercent(state) {
      return state.count / 10
    }
  },
  mutations: {
    incrementMutation(state, obj) {
      console.log("Inc mutation from counter module")
      state.count = state.count + obj.amount
    }
  },
  actions: {
    incrementAction(context, obj) {
      console.log("Inc action from counter module")
      context.commit('incrementMutation', obj)
    }
  }
}

const anotherCounterModule = {
  namespaced: true,
  state() {
    return {
      count: 0,
    }
  },
  getters: {
    // counterPercent(state) {
    //   return state.count / 10
    // }
  },
  mutations: {
    incrementMutation(state, obj) {
      console.log("Inc mutation from Anothercounter module")
      state.count = state.count + obj.amount
    }
  },
  actions: {
    incrementAction(context, obj) {
      console.log("Inc action from Anothercounter module")
      context.commit('incrementMutation', obj)
    }
  }
}



const todosModule = {
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
    todosCount(state) {
      return state.todos.length;
    },
    doneTodosCount(state) {
      return state.todos.filter((todo) => todo.done).length;
    },
    remainingTodosCount(state, getters) {
      return getters.todosCount - getters.doneTodosCount;
    },
  }
}

const store = new Vuex.Store({
  modules: {
    counter: counterModule,
    anothercounter: anotherCounterModule,
    todos: todosModule
  }
})

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
