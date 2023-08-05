import {
	authStoreAlias,
	feedStoreAlias,
	popularTagsStoreAlias,
	articleStoreAlias,
	createArticleStoreAlias,
	editArticleStoreAlias,
	likeStoreAlias,
	userProfileStoreAlias,
} from '@/variables/variables';

const mutationTypes = {
	authRegisterStart: `${authStoreAlias} registerStart`,
	authRegisterSuccess: `${authStoreAlias} registerSuccess`,
	authRegisterFailure: `${authStoreAlias} registerFailure`,

	authLoginStart: `${authStoreAlias} loginStart`,
	authLoginSuccess: `${authStoreAlias} loginSuccess`,
	authLoginFailure: `${authStoreAlias} loginFailure`,

	getCurrentUserStart: `${authStoreAlias} getCurrentUserStart`,
	getCurrentUserSuccess: `${authStoreAlias} getCurrentUserSuccess`,
	getCurrentUserFailure: `${authStoreAlias} getCurrentUserFailure`,

	updateCurrentUserStart: `${authStoreAlias} updateCurrentUserStart`,
	updateCurrentUserSuccess: `${authStoreAlias} updateCurrentUserSuccess`,
	updateCurrentUserFailure: `${authStoreAlias} updateCurrentUserFailure`,

	logout: `${authStoreAlias} logout`,

	getFeedStart: `${feedStoreAlias} getFeedStart`,
	getFeedSuccess: `${feedStoreAlias} getFeedSuccess`,
	getFeedFailure: `${feedStoreAlias} getFeedFailure`,

	getPopularTagsStart: `${popularTagsStoreAlias} getPopularTagsStart`,
	getPopularTagsSuccess: `${popularTagsStoreAlias} getPopularTagsSuccess`,
	getPopularTagsFailure: `${popularTagsStoreAlias} getPopularTagsFailure`,

	getArticleStart: `${articleStoreAlias} getArticleStart`,
	getArticleSuccess: `${articleStoreAlias} getArticleSuccess`,
	getArticleFailure: `${articleStoreAlias} getArticleFailure`,

	deleteArticleStart: `${articleStoreAlias} deleteArticleStart`,
	deleteArticleSuccess: `${articleStoreAlias} deleteArticleSuccess`,
	deleteArticleFailure: `${articleStoreAlias} deleteArticleFailure`,

	createArticleStart: `${createArticleStoreAlias} createArticleStart`,
	createArticleSuccess: `${createArticleStoreAlias} createArticleSuccess`,
	createArticleFailure: `${createArticleStoreAlias} createArticleFailure`,

	editArticleStart: `${editArticleStoreAlias} editArticleStart`,
	editArticleSuccess: `${editArticleStoreAlias} editArticleSuccess`,
	editArticleFailure: `${editArticleStoreAlias} editArticleFailure`,
	getArticleForEditStart: `${editArticleStoreAlias} getArticleForEditStart`,
	getArticleForEditSuccess: `${editArticleStoreAlias} getArticleForEditSuccess`,
	getArticleForEditFailure: `${editArticleStoreAlias} getArticleForEditFailure`,

	addLikeStart: `${likeStoreAlias} addLikeStart`,
	addLikeSuccess: `${likeStoreAlias} addLikeSuccess`,
	addLikeFailure: `${likeStoreAlias} addLikeFailure`,

	getUserProfileStart: `${userProfileStoreAlias} getUserProfileStart`,
	getUserProfileSuccess: `${userProfileStoreAlias} getUserProfileSuccess`,
	getUserProfileFailure: `${userProfileStoreAlias} getUserProfileFailure`,
};

export { mutationTypes };
