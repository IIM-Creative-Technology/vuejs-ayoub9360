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
        path: '/blog',
        name: 'Blog',
        component: () => import(/* webpackChunkName: "about" */ '../views/Blog/blog.vue')
    },
    {
        path: '/blog/item',
        name: 'Item',
        component: () => import(/* webpackChunkName: "about" */ '../views/Blog/blogItem.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
