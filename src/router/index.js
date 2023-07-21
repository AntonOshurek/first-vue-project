import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home/HomeView';
import Register from '@/views/register/RegisterView';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/register',
		name: 'register',
		component: Register,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
