import {createRouter, createWebHistory} from 'vue-router'
import vacancy from "@/pages/vacancy";
import vacancyAnonce from "@/components/cards/vacancyAnonce";
import vacancyCard from "@/pages/vacancyCard";
import companyProfile from "@/pages/companyProfile";
import freelancerProfile from "@/pages/freelancerProfile";
import personalAccount from "@/pages/personalAccount";

const routes = [
    {
        path: '/',
        component: vacancy
    },
    {
        path: '/vacancycard',
        component: vacancyCard
    },
    {
        path: '/companyprofile',
        component: companyProfile
    },
    {
        path: '/freelancerprofile',
        component: freelancerProfile
    },
    {
        path: '/account',
        component: personalAccount
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from) =>{
//   title: vacancyAnonce;
//   document.title = to.meta.title || 'Вакансии';
//     })

export default router
