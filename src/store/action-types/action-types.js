import {
	authStoreAlias,
	feedStoreAlias,
	popularTagsStoreAlias,
	articleStoreAlias,
	createArticleStoreAlias,
} from '@/variables/variables';

const actionTypes = {
	authRegister: `${authStoreAlias} registerAction`,
	authLogin: `${authStoreAlias} loginAction`,
	getCurrentUser: `${authStoreAlias} getCurrentUserAction`,

	getFeed: `${feedStoreAlias} getFeedAction`,

	getPopularTags: `${popularTagsStoreAlias} getPopularTagsAction`,

	getArticle: `${articleStoreAlias} getArticleAction`,
	deleteArticle: `${articleStoreAlias} deleteArticleAction`,

	createArticle: `${createArticleStoreAlias} createArticle`,
};

export { actionTypes };
