<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <todos-list></todos-list>
      </div>
      <div class="col-md-6">
        <div class="row">
          <counter></counter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import TodosList from "./components/TodosList.vue";
export default {
  name: "App",
  components: {
    TodosList,
    Counter,
  },
};
</script>

<style>
</style>
