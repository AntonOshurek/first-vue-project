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
	{
		path: routesPath.settings,
		name: routesNames.settings,
		component: Views.Settings,
	},
	{
		path: routesPath.yourFeed,
		name: routesNames.yourFeed,
		component: Views.YourFeed,
	},
	{
		path: routesPath.userProfile,
		name: routesNames.userProfile,
		component: Views.UserProfile,
	},
	{
		path: routesPath.userProfileFavorite,
		name: routesNames.userProfileFavorite,
		component: Views.UserProfile,
	},
	{
		path: routesPath.article,
		name: routesNames.article,
		component: Views.Article,
	},
	{
		path: routesPath.createArticle,
		name: routesNames.createArticle,
		component: Views.CreateArticle,
	},
	{
		path: routesPath.editArticle,
		name: routesNames.editArticle,
		component: Views.EditArticle,
	},
	{
		path: routesPath.tag,
		name: routesNames.tag,
		component: Views.TagFeed,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
