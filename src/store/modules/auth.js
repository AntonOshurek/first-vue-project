import * as authApi from '@/api/auth';

const state = {
	isSubmiting: false,
	currentUser: null,
	validationErrors: null,
	isLoggedIn: null,
};

const mutations = {
	registerStart(state) {
		state.isSubmiting = true;
		state.validationErrors = null;
	},
	registerSuccess(state, payload) {
		state.isSubmiting = false;
		state.currentUser = payload;
		state.isLoggedIn = true;
	},
	registerFailure(state, payload) {
		state.isSubmiting = false;
		state.currentUser = null;
		state.validationErrors = payload;
		state.isLoggedIn = false;
	},
};

const actions = {
	register(context, credentials) {
		context.commit('registerStart');

		return new Promise((resolve, reject) => {
			authApi
				.register(credentials)
				.then((res) => {
					context.commit('registerSuccess', res.data.user);
					resolve(res.data.user);
				})
				.catch((err) => {
					context.commit('registerFailure', err.response.data.errors);
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
