import { authStoreAlias } from '@/variables/variables';

export const getterTypes = {
	currentUser: `${authStoreAlias} currentUser`,
	isLoggedIn: `${authStoreAlias} isLoggedIn`,
	isSubmiting: `${authStoreAlias} isSubmiting`,
	isAnonymous: `${authStoreAlias} isAnonymous`,
	validationErrors: `${authStoreAlias} validationErrors`,
};
