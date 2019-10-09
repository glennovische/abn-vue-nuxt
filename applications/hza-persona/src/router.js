import Router from 'vue-router';
import Home from './views/Home.vue';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/over-ons',
      name: 'home',
      component: Home
    }
  ]
});
