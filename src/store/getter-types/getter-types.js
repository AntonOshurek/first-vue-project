import {
	authStoreAlias,
	feedStoreAlias,
	popularTagsStoreAlias,
	articleStoreAlias,
} from '@/variables/variables';

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

	articleData: `${articleStoreAlias} article`,
	articleLoading: `${articleStoreAlias} articleLoading`,
	articleError: `${articleStoreAlias} articleError`,
	deleteArticleStart: `${articleStoreAlias} articleError`,
	deleteArticleProcessing: `${articleStoreAlias} articleLoading`,
	deleteArticleError: `${articleStoreAlias} articleError`,
};

export { getterTypes };
