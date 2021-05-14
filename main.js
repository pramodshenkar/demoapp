
Vue.component('ShowProfile',{
    template:'<h4><slot></slot></h4>',
})

new Vue({
    el:"#app",
    data:{
        title:"App",
        names : ['John','Joe','Goerge']
    }
})
