const routesNames = {
	globalFeed: 'GlobalFeed',
	yourFeed: 'yourFeed',
	login: 'login',
	register: 'register',
	settings: 'settings',
	userProfile: 'userProfile',
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
	article: '/article/:slug',
	yourFeed: '/yourFeed',
	tag: '/tags/:slug',
	createArticle: '/articles/new',
	editArticle: '/articles/:slug/edit',
	settings: '/settings',
};

export { routesNames, routesPath };
