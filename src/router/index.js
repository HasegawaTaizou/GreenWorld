import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Volunteers from '@/pages/Volunteers.vue';
import EveryDropCounts from '@/pages/EveryDropCounts.vue';
import SeedOfLove from '@/pages/SeedOfLove.vue';

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
  },
  {
    path: '/every-drop-counts',
    name: 'EveryDropCounts',
    component: EveryDropCounts
  },
  {
    path: '/seed-of-love',
    name: 'SeedOfLove',
    component: SeedOfLove
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
