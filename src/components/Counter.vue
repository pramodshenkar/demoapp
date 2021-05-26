<template>
  <div>
    <div class="btn-group" role="group">
      <button
        @click="onIncrementByMutation({ amount: 1 })"
        class="btn btn-info"
      >
        Increment by Mutation
      </button>
      <button class="btn btn-warning">{{ count }}</button>
      <button
        @click="onIncrementByAction({ amount: 2 })"
        class="btn btn-secondary"
      >
        Increment by Action
      </button>
    </div>
    <br /><br />
    <p>10% of counter = {{ counterPercent }}</p>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      count: (state) => state.counter.count,
    }),
    ...mapGetters({
      counterPercent: "counterPercent",
    }),
  },
  methods: {
    ...mapMutations({
      onIncrementByMutation: "incrementMutation",
    }),
    ...mapActions({
      onIncrementByAction: "incrementAction",
    }),
  },
};
</script>