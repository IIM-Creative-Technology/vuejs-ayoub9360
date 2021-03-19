import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login/index.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register/index.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "about" */ '../views/Admin/index.vue')
    },
    {
        path: '/admin/add',
        name: 'AdminAdd',
        component: () => import(/* webpackChunkName: "about" */ '../views/Admin/add/index.vue')
    },
    {
        path: '/:id',
        name: 'BlogVue',
        component: () => import(/* webpackChunkName: "about" */ '../views/Blog/blogItem.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
