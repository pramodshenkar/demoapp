<template>
  <div>
    <!-- <p>{{ $store.state.count }}</p>     Directly Access -->
    <p>{{ count }}</p>
    <!--Access via Computer property-->
    <div class="btn-group" role="group">
      <button @click="onIncrement" class="btn btn-info">Increment</button>
      <button class="btn btn-warning">Reset</button>
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
      //simple way commmit calling
      //this.$store.commit("increment", { amount: 3 });

      //object style commit calling
      this.$store.commit({
        type: "increment",
        amount: 3,
      });
    },
  },
};
</script>