Vue.component('ShowUsers',{
    template:'<div><show-profile v-for="name in names">{{name}}</show-profile></div>',
    data() {
        return {
            names : ['John','Joe','Goerge']
        }
    },
})

Vue.component('ShowProfile',{
    template:'<h4><slot></slot></h4>',
})

new Vue({
    el:"#app",
    data:{
        title:"App",
    }
})
