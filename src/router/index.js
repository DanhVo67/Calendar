import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
        path:'/',
        component: Home
    },
    {
        path:'/history',
        component: () => import('../views/History.vue')
    },
    {
        path:'/event',
        component: () => import('../views/Event.vue')
    },
    {
        path:'/user',
        component: () => import('../views/Login.vue')
    },
    {
        path:'/About',
        component: () => import('../views/About.vue')
    },
    {
        path:'/setting',
        component: () => import('../views/Setting.vue')
    },
    {
        path:'/Weather',
        component: () => import('../views/Weather.vue')
    },
   
],
})
export default router