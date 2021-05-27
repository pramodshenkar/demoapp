import Vue from 'vue'
import Vuex from 'vuex'
import counterModule from './modules/counter/index'
import todosModule from './modules/todos/index'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        counter: counterModule,
        todos: todosModule
    }
})

export default store;
