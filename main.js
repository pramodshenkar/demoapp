Vue.component('CouponCode', {
  template: `<div>
    <input type="text" v-model="coupon" placeholder="Enter Coupon">
    <button @click="sendCoupenToParents">Apply</button>
  </div>`,
  data() {
    return {
      coupon: ''
    }
  },
  methods: {
    sendCoupenToParents() {
      this.$emit('couponhandler', this.coupon)
    }
  },
})


new Vue({
  el: "#app",
  data: {
    title: "App",
    coupon: ""
  },
  methods: {
    getCoupenFromChild(coupon) {
      this.coupon = coupon;
    },
  },
});


/*
#Props :

  in parent :
      pass data to componet with var ie title, message :
      <mycomp title="Vue" message="simple vue message"></mycomp>
  in component (child):
      use it same as data
      define in props array
      eg : template : '<h1>{{title}}:{{message}}</h1>'
           props : ['title','message']

--------------------------------------------------------------------------

#Emit event
  here for simplicity we uses 2 methods
  1. in child -> to emmit event
  2. in parent -> to cactch value from that event

  commen thing in these two function is eventhandler.
  child method spacify eventhandler name in $emit & parent method get called using that event handler.
  ie  child -> $emit('myHandler',data)
      parent-> <mycomp @myHandler="methodName"></mycomp>

  in parent :
      <mycomponent v-on:eventHandlerName="UpdateFunc($event)" ></mycomponent>
      UpdateFucn(temp){

      }
  in component :
      this.$emit("eventHanderName",message)

*/