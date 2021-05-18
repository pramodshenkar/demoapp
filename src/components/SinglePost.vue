<template>
  <div class="col-mod-5">
    <h3>{{ title }}</h3>
    <h4>{{ username }}</h4>
    <h4>{{ designation }} at {{ company }}</h4>
  </div>
</template>
<script>
export default {
  props: ["username","designation", "company"],
  data: function () {
    return {
      title: "Post Info",
    };
  },
};
</script>