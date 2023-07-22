import { createRouter, createWebHistory } from 'vue-router';
import * as Views from '../views';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Views.HomeView,
	},
	{
		path: '/register',
		name: 'register',
		component: Views.RegisterView,
	},
	{
		path: '/login',
		name: 'login',
		component: Views.LoginView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
