import { authStoreAlias, feedStoreAlias, popularTagsStoreAlias } from '@/variables/variables';

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

	getFeedStart: `${feedStoreAlias} getFeedStart`,
	getFeedSuccess: `${feedStoreAlias} getFeedSuccess`,
	getFeedFailure: `${feedStoreAlias} getFeedFailure`,

	getPopularTagsStart: `${popularTagsStoreAlias} getPopularTagsStart`,
	getPopularTagsSuccess: `${popularTagsStoreAlias} getPopularTagsSuccess`,
	getPopularTagsFailure: `${popularTagsStoreAlias} getPopularTagsFailure`,
};

export { mutationTypes };
