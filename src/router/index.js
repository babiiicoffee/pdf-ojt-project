import Vue from 'vue'
import Login from '@/components/modules/Login.vue'
import Register from '@/components/modules/Register.vue'
import Home from '@/components/modules/Home.vue'
import Dashboard from '@/components/modules/Dashboard.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router