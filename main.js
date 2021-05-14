Window.Event = new Vue();

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
      Window.Event.$emit('couponhandler', this.coupon)
    }
  },
})


Vue.component('ShoppingDetails', {
  template: "<h4>Total Bill : ${{bill}} </h4>",
  data() {
    return {
      bill: 300
    }
  },
  mounted() {
    Window.Event.$on('couponhandler', (coupen) => {
      if (coupen.length != 0) {
        this.bill = this.bill - 50
      }
    })
  },
})


new Vue({
  el: "#app",
  data: {
    title: "App",
    coupon: ""
  },
  mounted() {
    Window.Event.$on('couponhandler', (coupen) => {
      this.getCoupenFromChild(coupen);
    })
  },
  methods: {
    getCoupenFromChild(coupon) {
      this.coupon = coupon;
    },
  },
});


/*
--------------------------------------------------------------------------

#Props :
  parent->child communication

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
  child->Parent communication

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

--------------------------------------------------------------------------

# Event Dispatch

  comp1 <-> comp2 (coponent at same/diff level ie parent/siblings) communication

  as we saw every vue instance has $emit('handler',data) event ie for broadcasting
  same way  every vue instance has $on('handler', (data)=>{}) event ie for listening with clourse method

  NOTE : here we should use event bus. event bus is vuejs instance who can broadcast and listen event without help of parant

  Another way to listen data from child->parent  :
  in child->parent commn we used handler to call parent's method.
  but insted of it we can use mount() to call $on event & in $on clousure call parent's method.

  eg :
  in html: <coupon-code></coupon-code>
  in js  :  mounted() {
              Window.Event.$on('couponhandler', (coupen) => {
                this.getCoupenFromChild(coupen);
              })
            },

  In this way we can listen for event in parent as well as other sibling components.

  -----------------------------------------------------------------------------------


*/