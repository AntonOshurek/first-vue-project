import { authStoreAlias, feedStoreAlias } from '@/variables/variables';

const getterTypes = {
	currentUser: `${authStoreAlias} currentUser`,
	isLoggedIn: `${authStoreAlias} isLoggedIn`,
	isSubmiting: `${authStoreAlias} isSubmiting`,
	isAnonymous: `${authStoreAlias} isAnonymous`,
	validationErrors: `${authStoreAlias} validationErrors`,
	feedData: `${feedStoreAlias} feedData`,
	isLoading: `${feedStoreAlias} isLoading`,
	error: `${feedStoreAlias} error`,
};

export { getterTypes };
