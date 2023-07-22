import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home/home.view';
import RegisterView from '@/views/register/register.view';
import LoginView from '@/views/login/login.view';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/register',
		name: 'register',
		component: RegisterView,
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
