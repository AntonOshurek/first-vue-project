import { authStoreAlias, feedStoreAlias } from '@/variables/variables';

const actionTypes = {
	authRegister: `${authStoreAlias} register`,
	authLogin: `${authStoreAlias} login`,
	getCurrentUser: `${authStoreAlias} getCurrentUser`,

	getFeed: `${feedStoreAlias} getFeed`,
};

export { actionTypes };
