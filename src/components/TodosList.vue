<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-header">
        <h4>Todo List : ({{ doneCount }} done)</h4>
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
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    doneCount() {
      return this.$store.getters.doneTodosCount;
    },
  },
};
</script>

<style>
</style>