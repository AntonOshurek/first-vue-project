import { actionTypes } from '@/store/action-types/action-types';
import { mutationTypes } from '@/store/mutation-types/mutation-types';
import authApi from '@/api/auth';
import storageService from '@/services/storageService';
import { storageNameForToken } from '@/variables/variables';

const actions = {
	[actionTypes.authRegister](context, credentials) {
		context.commit(mutationTypes.authRegisterStart);

		return new Promise((resolve, reject) => {
			authApi
				.register(credentials)
				.then((res) => {
					context.commit(mutationTypes.authRegisterSuccess, res.data.user);
					storageService.setItem(storageNameForToken, res.data.user.token);
					resolve(res.data.user);
				})
				.catch((err) => {
					context.commit(mutationTypes.authRegisterFailure, err.response.data.errors);
					reject(err);
				});
		});
	},
	[actionTypes.authLogin](context, credentials) {
		context.commit(mutationTypes.authLoginStart);

		return new Promise((resolve, reject) => {
			authApi
				.login(credentials)
				.then((res) => {
					context.commit(mutationTypes.authLoginSuccess, res.data.user);
					storageService.setItem(storageNameForToken, res.data.user.token);
					resolve(res.data.user);
				})
				.catch((err) => {
					context.commit(mutationTypes.authLoginFailure, err.response.data.errors);
					reject(err);
				});
		});
	},
	[actionTypes.getCurrentUser](context) {
		context.commit(mutationTypes.getCurrentUserStart);

		return new Promise((resolve) => {
			authApi
				.getCurrentUser()
				.then((res) => {
					context.commit(mutationTypes.getCurrentUserSuccess, res.data.user);
					resolve(res.data.user);
				})
				.catch(() => {
					context.commit(mutationTypes.getCurrentUserFailure);
				});
		});
	},
};

export { actions };
