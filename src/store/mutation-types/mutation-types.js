import { authStoreAlias } from '@/variables/variables';

export const mutationTypes = {
	authRegisterStart: `${authStoreAlias} registerStart`,
	authRegisterSuccess: `${authStoreAlias} registerSuccess`,
	authRegisterFailure: `${authStoreAlias} registerFailure`,

	authLoginStart: `${authStoreAlias} loginStart`,
	authLoginSuccess: `${authStoreAlias} loginSuccess`,
	authLoginFailure: `${authStoreAlias} loginFailure`,

	getCurrentUserStart: `${authStoreAlias} getCurrentUserStart`,
	getCurrentUserSuccess: `${authStoreAlias} getCurrentUserSuccess`,
	getCurrentUserFailure: `${authStoreAlias} getCurrentUserFailure`,
};
