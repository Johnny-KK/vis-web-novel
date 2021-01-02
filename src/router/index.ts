import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/layout' },
  { path: '/layout', name: 'layout', component: () => import('@/views/layout/index.vue') },
  { path: '/page', name: 'page', component: () => import('@/views/page/index.vue') },
  { path: '/catalog', name: 'catalog', component: () => import('@/views/catalog/index.vue') }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
