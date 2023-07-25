import { mutationTypes } from '@/store/mutation-types/mutation-types';

export const mutations = {
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
	[mutationTypes.authLoginStart](state) {
		state.isSubmiting = true;
		state.validationErrors = null;
	},
	[mutationTypes.authLoginSuccess](state, payload) {
		state.isSubmiting = false;
		state.currentUser = payload;
		state.isLoggedIn = true;
	},
	[mutationTypes.authLoginFailure](state, payload) {
		state.isSubmiting = false;
		state.currentUser = null;
		state.validationErrors = payload;
		state.isLoggedIn = false;
	},
	[mutationTypes.getCurrentUserStart](state) {
		state.isLoading = true;
	},
	[mutationTypes.getCurrentUserSuccess](state, payload) {
		state.isLoading = false;
		state.currentUser = payload;
		state.isLoggedIn = true;
	},
	[mutationTypes.getCurrentUserFailure](state) {
		state.isLoading = false;
		state.isLoggedIn = false;
		state.currentUser = null;
	},
};
