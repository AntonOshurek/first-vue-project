import {
	authStoreAlias,
	feedStoreAlias,
	popularTagsStoreAlias,
	articleStoreAlias,
} from '@/variables/variables';

const actionTypes = {
	authRegister: `${authStoreAlias} registerAction`,
	authLogin: `${authStoreAlias} loginAction`,
	getCurrentUser: `${authStoreAlias} getCurrentUserAction`,

	getFeed: `${feedStoreAlias} getFeedAction`,

	getPopularTags: `${popularTagsStoreAlias} getPopularTagsAction`,

	getArticle: `${articleStoreAlias} getArticleAction`,
	deleteArticle: `${articleStoreAlias} deleteArticleAction`,
};

export { actionTypes };
