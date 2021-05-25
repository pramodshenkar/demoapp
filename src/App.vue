<template>
  <div class="container mt-5">
    <todos-list></todos-list>
  </div>
</template>

<script>
import TodosList from "./components/TodosList.vue";
export default {
  name: "App",
  components: { TodosList },
};
</script>

<style>
</style>
