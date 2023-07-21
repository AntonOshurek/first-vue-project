import * as authApi from '@/api/auth';

const state = {
	isSubmiting: false,
};

const mutations = {
	registerStart(state) {
		state.isSubmiting = true;
	},
	registerSuccess(state) {
		state.isSubmiting = false;
	},
	registerFailure(state) {
		state.isSubmiting = false;
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
					console.log(res);
					resolve(res.data.user);
				})
				.catch((err) => {
					context.commit('registerFailure', err.response.data.errors);
					console.log(err);
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
