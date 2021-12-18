import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/Home.vue'
import admin from '../components/Admin.vue'
import homeTemplate from '../components/admin-components/HomeTemplate.vue'
import eventTemplate from '../components/admin-components/EventTemplate.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: home,
            name: 'home',
            props: true,
            
        },
        {
            path: '/admin',
            name: 'admin',
            component: admin,
            props: true,
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: homeTemplate
                },
                {
                    path: 'event',
                    name: 'event',
                    component: eventTemplate
                },
            ]
        }
    ]
})