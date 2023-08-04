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
				.then((user) => {
					context.commit(mutationTypes.authRegisterSuccess, user);
					storageService.setItem(storageNameForToken, user.token);
					resolve(user);
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
				.then((user) => {
					context.commit(mutationTypes.authLoginSuccess, user);
					storageService.setItem(storageNameForToken, user.token);
					resolve(user);
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
				.then((user) => {
					context.commit(mutationTypes.getCurrentUserSuccess, user);
					resolve(user);
				})
				.catch(() => {
					context.commit(mutationTypes.getCurrentUserFailure);
				});
		});
	},
	[actionTypes.updateCurrentUser](context, { currentUserInput }) {
		context.commit(mutationTypes.updateCurrentUserStart);

		return new Promise((resolve) => {
			authApi
				.updateCurrentUser(currentUserInput)
				.then((user) => {
					context.commit(mutationTypes.updateCurrentUserSuccess, user);
					resolve(user);
				})
				.catch((err) => {
					context.commit(mutationTypes.updateCurrentUserFailure, err);
				});
		});
	},
};

export { actions };
