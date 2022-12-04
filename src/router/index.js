import { createRouter, createWebHistory } from 'vue-router'
import vacancy from "@/pages/vacancy";
import vacancyAnonce from "@/components/UI/vacancyAnonce";
import vacancyCard from "@/pages/vacancyCard";

const routes = [
  {
    path: '/',
    component: vacancy
  },
  {
    path: '/vacancycard',
    component: vacancyCard
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
