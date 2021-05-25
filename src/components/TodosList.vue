<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-header">
        <h4>Todo List :</h4>
        <p>Total : {{ todosCount }}</p>
        <p>Done : {{ doneTodosCount }}</p>
        <p>Remaining : {{ remainingTodosCount }}</p>
      </div>
      <div class="card-body">
        <ul v-for="todo in todos" :key="todo.id">
          <li>{{ todo.task }} : ({{ todo.done ? "Done" : "Not done" }})</li>
        </ul>
      </div>
    </div>
    <button
      class="btn btn-primary"
      @click.prevent="$store.state.todos[3].done = true"
    >
      Last Task done
    </button>
    <p>{{ piValue }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    todosCount() {
      return this.$store.getters.todosCount;
    },
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
    remainingTodosCount() {
      return this.$store.getters.remainingTodosCount;
    },
  },
};
</script>

<style>
</style>