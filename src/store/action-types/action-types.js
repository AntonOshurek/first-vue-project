import { authStoreAlias, feedStoreAlias, popularTagsStoreAlias } from '@/variables/variables';

const actionTypes = {
	authRegister: `${authStoreAlias} register`,
	authLogin: `${authStoreAlias} login`,
	getCurrentUser: `${authStoreAlias} getCurrentUser`,

	getFeed: `${feedStoreAlias} getFeed`,

	getPopularTags: `${popularTagsStoreAlias} getPopularTags`,
};

export { actionTypes };
