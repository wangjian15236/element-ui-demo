import Vue from 'vue';
import Router from 'vue-router';
import { importRouter } from '@/utils';
const routers = require.context('@/views/', true, /index\.vue$/);
const routes = importRouter(routers, 'router');

console.log(routes);

Vue.use(Router);

export default new Router({
  routes
});
