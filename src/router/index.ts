import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/bookshelf' },
  { path: '/layout', name: 'layout', component: () => import('@/views/layout/index.vue') },
  { path: '/page/:novelId', props: true, name: 'page', component: () => import('@/views/page/index.vue') },
  { path: '/catalog', name: 'catalog', component: () => import('@/views/catalog/index.vue') },
  { path: '/bookshelf', name: 'bookshelf', component: () => import('@/views/bookshelf/index.vue') }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
