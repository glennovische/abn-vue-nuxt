import Router from 'vue-router';
import Home from './views/Home.vue';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/hypotheek-samenstellen',
      name: 'home',
      component: Home
    }
  ]
});
