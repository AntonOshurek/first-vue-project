import { authStoreAlias, feedStoreAlias, popularTagsStoreAlias } from '@/variables/variables';

const getterTypes = {
	currentUser: `${authStoreAlias} currentUser`,
	isLoggedIn: `${authStoreAlias} isLoggedIn`,
	isSubmiting: `${authStoreAlias} isSubmiting`,
	isAnonymous: `${authStoreAlias} isAnonymous`,
	validationErrors: `${authStoreAlias} validationErrors`,
	feedData: `${feedStoreAlias} feedData`,
	isLoading: `${feedStoreAlias} isLoading`,
	error: `${feedStoreAlias} error`,

	popularTagsData: `${popularTagsStoreAlias} popularTagsData`,
	popularTagsLoading: `${popularTagsStoreAlias} popularTagsLoading`,
	popularTagsError: `${popularTagsStoreAlias} popularTagsError`,
};

export { getterTypes };
