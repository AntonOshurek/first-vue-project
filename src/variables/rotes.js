const routesNames = {
	globalFeed: 'GlobalFeed',
	yourFeed: 'yourFeed',
	login: 'login',
	register: 'register',
	settings: 'settings',
	userProfile: 'userProfile',
	userProfileFavorite: 'userProfileFavorite',
	tag: 'tag',
	article: 'article',
	createArticle: 'createArticle',
	editArticle: 'editArticle',
};

const routesPath = {
	root: '/',
	login: '/login',
	register: '/register',
	userProfile: '/userProfile/:slug',
	userProfileFavorite: '/userProfile/:slug/favorites',
	article: '/article/:slug',
	yourFeed: '/yourFeed',
	tag: '/tag/:slug',
	createArticle: '/articles/new',
	editArticle: '/articles/:slug/edit',
	settings: '/settings',
};

export { routesNames, routesPath };
