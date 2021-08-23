/* Package Imports */
import { createRouter, createWebHistory } from 'vue-router';
/* Local Config */
import Login from '../views/Login.vue';
import Dash from '../views/Dash.vue';
import Routes from '../views/Routes.vue'
/* Route Paths & Config */
const routes = [
  {
    path: '/',
    name: 'dash',
    component: Dash,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/routes',
    name: 'routes',
    component: Routes,
  }
];
/* Constructed Router */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
/* Export Constructed Router */
export default router;
