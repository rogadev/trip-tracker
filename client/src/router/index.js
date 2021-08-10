/* Package Imports */
import { createRouter, createWebHistory } from 'vue-router';
/* Local Config */
import Login from '../views/Login.vue';
import Dash from '../views/Dash.vue';
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
];
/* Constructed Router */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
/* Export Constructed Router */
export default router;
