import {
	authStoreAlias,
	feedStoreAlias,
	popularTagsStoreAlias,
	articleStoreAlias,
	createArticleStoreAlias,
	editArticleStoreAlias,
	likeStoreAlias,
} from '@/variables/variables';

const actionTypes = {
	authRegister: `${authStoreAlias} registerAction`,
	authLogin: `${authStoreAlias} loginAction`,
	getCurrentUser: `${authStoreAlias} getCurrentUserAction`,
	updateCurrentUser: `${authStoreAlias} updateCurrentUser`,
	logout: `${authStoreAlias} logout`,

	getFeed: `${feedStoreAlias} getFeedAction`,

	getPopularTags: `${popularTagsStoreAlias} getPopularTagsAction`,

	getArticle: `${articleStoreAlias} getArticleAction`,
	deleteArticle: `${articleStoreAlias} deleteArticleAction`,

	createArticle: `${createArticleStoreAlias} createArticle`,

	editArticle: `${editArticleStoreAlias} editArticle`,
	getArticleForEdit: `${editArticleStoreAlias} getArticleForEdit`,

	addLike: `${likeStoreAlias} addLike`,
};

export { actionTypes };
