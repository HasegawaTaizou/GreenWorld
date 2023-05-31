import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Volunteers from '@/pages/Volunteers.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/volunteers',
    name: 'Volunteers',
    component: Volunteers
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
