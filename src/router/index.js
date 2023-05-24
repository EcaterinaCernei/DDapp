import {createRouter, createWebHistory} from 'vue-router';

import {Home} from '@/views';
import Login from "@/views/Login";
import Register from "@/views/Register";

export const router = createRouter({
    history: createWebHistory('/'),
    linkActiveClass: 'active',
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/register', component: Register},
    ]
});