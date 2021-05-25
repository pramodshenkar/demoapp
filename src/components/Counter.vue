<template>
  <div>
    <!-- <p>{{ $store.state.count }}</p>     Directly Access -->
    <!--Access via Computer property-->
    <div class="btn-group" role="group">
      <button @click="onIncrement" class="btn btn-info">Increment</button>
      <button class="btn btn-warning">{{ count }}</button>
      <button class="btn btn-secondary">Decrement</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    onIncrement() {
      //for mutation call :
      // this.$store.commit({

      //for action call
      this.$store.dispatch({
        type: "increment",
        amount: 3,
      });
    },
  },
};
</script>