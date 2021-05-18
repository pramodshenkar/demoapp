import Vue from 'vue'
import App from './App.vue'

import SinglePost from './components/SinglePost.vue'

Vue.config.productionTip = false

Vue.component('SinglePost', SinglePost)

new Vue({
  render: h => h(App),
}).$mount('#app')
