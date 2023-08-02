import {
	authStoreAlias,
	feedStoreAlias,
	popularTagsStoreAlias,
	articleStoreAlias,
} from '@/variables/variables';

const actionTypes = {
	authRegister: `${authStoreAlias} register`,
	authLogin: `${authStoreAlias} login`,
	getCurrentUser: `${authStoreAlias} getCurrentUser`,

	getFeed: `${feedStoreAlias} getFeed`,

	getPopularTags: `${popularTagsStoreAlias} getPopularTags`,

	getArticle: `${articleStoreAlias} getArticle`,
	deleteArticle: `${articleStoreAlias} deleteArticle`,
};

export { actionTypes };
