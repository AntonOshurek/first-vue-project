import { createStore } from 'vuex';
//modules
import auth from './modules/auth/';
import feed from './modules/feed';
import popularTags from './modules/popular-tags';
import article from './modules/article';
import createArticle from './modules/create-article';
import editArticle from './modules/edit-article';
import settings from './modules/settings';
import like from './modules/like';
import userProfile from './modules/user-profile';

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		auth,
		feed,
		popularTags,
		article,
		createArticle,
		editArticle,
		settings,
		like,
		userProfile,
	},
});
