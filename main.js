Vue.component('counter', {
  data() {
    return {
      count: 0
    }
  },
})

new Vue({
  el: "#app",
  data: {
    title: "App",
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

  Named slot :
  we pass data into component using slot as  <mycomponent>HELLO USER</mycomponent>
  Generally slot takes one data but suppose we have to pass title,message,day
  in such cases we used named slots
  NOTE: If we don't give name to slot then it called as default slot & to use it we can simply pass data with blank <div></div>
  eg
            <mycomponent>
              <div slot="title">HELLO USER</div>
              <div slot="message">YOU ARE DOING WELL</div>
              <div slot="day">THURSDAY</div>
            </mycomponent>

  in component:
            Vue.component('mycomponent',{
              template: `
                Title : <slot name="title"></slot>
                Message : <slot name="message"></slot>
                Day : <slot name="day"></slot>
              `
            })

-----------------------------------------------------------------------------------

Inline Components :
    What if we don't use template & just show data by slot?
    What if we try to show variables in slot's data
    --> It will give error for both
    But this both que can impliment using inline component
    They are just same as normal component but diff is that in inline component we can avoid template and we can also use data in slot's part
    To define inline components just use 'inline-template' keyword while calling componets

  eg : in html
      <counter inline-template>
        <div>
          Now counter is {{count}}
          <button @click="count++">Increment</button>
        </div>
      </counter>

      in js :
      Vue.component('counter', {
        data() {
          return {
            count: 0
          }
        },
      })

*/