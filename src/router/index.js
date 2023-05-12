import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: () => import('@/components/StartPage.vue')
  },

  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/film/:id',
    name: 'film',
    component: () => import('@/components/DetailItem.vue'),
  },
  {
    path: '/series/:id',
    name: 'series',
    component: () => import('@/components/DetailItem.vue'),
  },
  {
    path: '/popularFilms',
    name: 'popularFilms',
    component: () => import('@/components/PopularFilms.vue'),
  },
  {
    path: '/popularSeries',
    name: 'popularSeries',
    component: () => import('@/components/PopularSeries.vue'),
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('@/components/New.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
