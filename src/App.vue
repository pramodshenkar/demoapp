<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="nav navbar-nav">
        <router-link class="nav-item nav-link active" to="Signup">Signup</router-link>
        <router-link class="nav-item nav-link" to="Login">Login</router-link>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-mod-12 mt-5">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>