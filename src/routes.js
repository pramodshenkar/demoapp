import Login from './pages/Login.vue'
import Signup from './pages/Signup.vue'
import NotFound from './pages/NotFound.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
    },
    {
        path: '/:NotFound(.*)*',
        component: NotFound
    }
];
const router = new VueRouter({
    routes: routes,
    mode: "history"
})
export default router