import {createApp} from 'vue'
import {createRouter,createWebHistory} from 'vue-router';
import HomeView from '/src/components/pages/HomeView.vue';
import AboutView from '/src/components/pages/AboutView.vue';
import ActivitiesView from '/src/components/pages/ActivitiesView.vue';
const Vue = createApp();
const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { template: 'DefaultTemplate' },
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: { template: 'LeftTemplate' },
      },
    {
      path: '/activities',
      name: 'activities',
      component: ActivitiesView,
      meta: { template: 'RightTemplate' },
    },
  ];
const router = createRouter({
    history: createWebHistory(""),
    routes
  });
  Vue.use(router);

export default router;
