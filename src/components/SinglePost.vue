<template>
  <div class="col-mod-5">
    <h3>{{ title }}</h3>
    <h4>{{ username }}</h4>
    <h4>{{ designation }} at age of {{ age }}</h4>
  </div>
</template>
<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: false,
      default: "IT Employee",
    },
    age: {
      type: Number,
      required: true,
      validator: function (value) {
        return value > 0 && value < 150;
      },
    },
  },
  data: function () {
    return {
      title: "Post Info",
    };
  },
};
</script>