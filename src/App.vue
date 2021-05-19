<template>
  <div id="app" class="container">
    <div class="row">
      <single-post
        :username="user.firstname"
        :designation="user.designation"
        :age="user.age"
      ></single-post>
    </div>
  </div>
</template>

<script>
import SinglePost from "./components/SinglePost.vue";

export default {
  name: "App",
  components: {
    SinglePost,
  },
  data() {
    return {
      user: {
        firstname: "Pramod",
        // designation: "Software developer",
        age: -3,
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
