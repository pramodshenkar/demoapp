<template>
  <div>
    <button v-show="isLoggedIn" class="btn btn-info">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>

<style>
</style>