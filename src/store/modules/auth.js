import * as authApi from '@/api/auth';
import { setItem } from '@/helpers/persistanceStorage';
import { mutationTypes } from '../mutation-types/mutation-types';
import { actionTypes } from '../action-types/action-types';

const state = {
	isSubmiting: false,
	currentUser: null,
	validationErrors: null,
	isLoggedIn: null,
};

const mutations = {
	[mutationTypes.authRegisterStart](state) {
		state.isSubmiting = true;
		state.validationErrors = null;
	},
	[mutationTypes.authRegisterSuccess](state, payload) {
		state.isSubmiting = false;
		state.currentUser = payload;
		state.isLoggedIn = true;
	},
	[mutationTypes.authRegisterFailure](state, payload) {
		state.isSubmiting = false;
		state.currentUser = null;
		state.validationErrors = payload;
		state.isLoggedIn = false;
	},
};

const actions = {
	[actionTypes.authRegister](context, credentials) {
		context.commit(mutationTypes.authRegisterStart);

		return new Promise((resolve, reject) => {
			authApi
				.register(credentials)
				.then((res) => {
					context.commit(mutationTypes.authRegisterSuccess, res.data.user);
					setItem('accessToken', res.data.user.token);
					resolve(res.data.user);
				})
				.catch((err) => {
					context.commit(mutationTypes.authRegisterFailure, err.response.data.errors);
					reject(err);
				});
		});
	},
};

export default {
	state,
	actions,
	mutations,
};
