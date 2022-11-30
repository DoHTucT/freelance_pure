import { createRouter, createWebHistory } from 'vue-router'
import vacancy from "@/pages/vacancy";

const routes = [
  {
    path: '/',
    component: vacancy
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
