import {
	authStoreAlias,
	feedStoreAlias,
	popularTagsStoreAlias,
	articleStoreAlias,
	createArticleStoreAlias,
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

	deleteArticleProcessing: `${articleStoreAlias} deleteArticleProcessing`,
	deleteArticleError: `${articleStoreAlias} deleteArticleError`,

	createArticleIsSubmiting: `${createArticleStoreAlias} createArticleIsSubmiting`,
	createArticleError: `${createArticleStoreAlias} createArticleError`,
};

export { getterTypes };
