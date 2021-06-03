<template>
  <div id="app">
    <app-header></app-header>
    <random-number></random-number>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import RandomNumber from './components/RandomNumber.vue';
export default {
  name: "App",
  components: {
    AppHeader,
    RandomNumber,
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
