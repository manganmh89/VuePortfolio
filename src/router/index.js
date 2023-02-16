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
            name: 'HomeCard',
            component: MainCard
        },
        {
            path: '/experience',
            name: 'ExperienceCard',
            component: ExperienceCard
        },
        {
            path: '/projects',
            name: 'ProjectsCard',
            component: ProjectsCard
        },
        {
            path: '/contact',
            name: 'ContactCard',
            component: ContactCard
        },
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router