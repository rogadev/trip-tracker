/* Package Imports */
import { createRouter, createWebHistory } from 'vue-router';
/* Local Config */
import Dash from '../views/Dash.vue';
import Routes from '../views/Routes.vue';
import Trips from '../views/Trips.vue';
import Login from '../views/Login.vue';
import Success from '../views/Success.vue';
/* Route Paths & Config */
const routes = [
  {
    path: '/',
    name: 'dash',
    component: Dash,
  },
  {
    path: '/routes',
    name: 'routes',
    component: Routes,
  },
  {
    path: '/trips',
    name: 'trips',
    component: Trips,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/success/new-user',
    name: 'success',
    component: Success,
  },
];
/* Constructed Router */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
/* Export Constructed Router */
export default router;
