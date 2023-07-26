import { createRouter, createWebHistory } from 'vue-router';
import * as Views from '../views';
import { routesNames, routesPath } from '@/variables/rotes';

const routes = [
	{
		path: routesPath.root,
		name: routesNames.globalFeed,
		component: Views.GlobalFeed,
	},
	{
		path: routesPath.register,
		name: routesNames.register,
		component: Views.RegisterView,
	},
	{
		path: routesPath.login,
		name: routesNames.login,
		component: Views.LoginView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
