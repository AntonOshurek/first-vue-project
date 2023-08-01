import { createStore } from 'vuex';
//modules
import auth from './modules/auth/';
import feed from './modules/feed';
import popularTags from './modules/popular-tags';
import article from './modules/article';

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
	},
});
