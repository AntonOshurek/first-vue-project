import {
	authStoreAlias,
	feedStoreAlias,
	popularTagsStoreAlias,
	articleStoreAlias,
	createArticleStoreAlias,
	editArticleStoreAlias,
	settingsStoreAlias,
	userProfileStoreAlias,
} from '@/variables/variables';

const getterTypes = {
	currentUser: `${authStoreAlias} currentUser`,
	isLoggedIn: `${authStoreAlias} isLoggedIn`,
	isSubmiting: `${authStoreAlias} isSubmiting`,
	isAnonymous: `${authStoreAlias} isAnonymous`,
	validationErrors: `${authStoreAlias} validationErrors`,

	settingsIsSubmitting: `${settingsStoreAlias} isSibmitting`,
	settingsValidationErrors: `${settingsStoreAlias} settingsValidationErrors`,

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

	editArticleIsSubmiting: `${editArticleStoreAlias} editArticleIsSubmiting`,
	editArticleValidationError: `${editArticleStoreAlias} editArticleError`,
	getArticleForEditError: `${editArticleStoreAlias} getArticleForEditError`,
	editArticleIsLoading: `${editArticleStoreAlias} editArticleIsLoading`,
	editArticleData: `${editArticleStoreAlias} editArticleData`,

	userProfileData: `${userProfileStoreAlias} userProfileData`,
	userProfileLoading: `${userProfileStoreAlias} userProfileLoading`,
	userProfileError: `${userProfileStoreAlias} userProfileError`,
};

export { getterTypes };
