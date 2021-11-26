import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../components/AdminDashboard.vue'
import EventTemplate from '../components/child-components/EventTemplate.vue'
import HomeTemplate from '../components/child-components/HomeTemplate.vue'
import RegisterLayout from '../components/authentication/RegisterLayout.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: RegisterLayout,
            props: true
            
        },

        {
            path: '/admin',
            component: Admin,
            props: true,
            children: [
                {
                    path: 'home',
                    component: HomeTemplate
                },
                {
                    name: 'eventTemplate',
                    path: 'events/:eventId',
                    component: EventTemplate
                }
            ]
            
        },
        
    ]
})