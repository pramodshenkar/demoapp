<template>
  <div>
    <p>Signup</p>
    <p>Hello from {{name}}</p>
    <div class="container">
      <form>
        <div class="form-group row">
          <div class="col-sm-1-12">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-1-12">
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-1-12">
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-1-12">
            <input
              type="password"
              class="form-control"
              name="confirmpassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div class="form-group row">
          <div>
            <button type="submit" class="btn btn-primary">Signup</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
      // name : "Pramod"
    }
  },
  computed :{
    ...mapState({
         name : (state) => state.auth.name
    })
  }
};
</script>

<style>
</style>