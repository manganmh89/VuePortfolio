import { createRouter, createWebHistory } from "vue-router";
import MainCard from '../views/MainCard.vue';
import ExperienceCard from './../views/ExperienceCard.vue';
import ProjectsCard from './../views/ProjectsCard.vue';
import ContactCard from './../views/ContactCard.vue';

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes: [
//         {
//             path:'/bio',
//             component: MainCard
//         },
//         {
//             path:'/experience',
//             component: () => import('../views/ExperienceCard.vue')
//         },
//         {
//             path:'/projects',
//             component: () => import('../views/ProjectsCard.vue')
//         },
//         {
//             path:'/contact',
//             component: () => import('../views/ContactCard.vue')
//         }
//     ]
// })
const routes = [
        {
            path: '/',
            name: 'home',
            component: MainCard
        },
        {
            path: '/experience',
            name: 'experience',
            component: ExperienceCard
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsCard
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactCard
        },
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router