export default {
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