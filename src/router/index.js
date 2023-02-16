import { createRouter, createWebHistory } from "vue-router";
import MainCard from './../components/MainCard.vue';
import ExperienceCard from './../components/ExperienceCard.vue';
import ProjectsCard from './../components/ProjectsCard.vue';
import ContactCard from './../components/ContactCard.vue';



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
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

export default router