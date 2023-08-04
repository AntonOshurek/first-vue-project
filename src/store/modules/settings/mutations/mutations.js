import { mutationTypes } from '@/store/mutation-types/mutation-types';

const mutations = {
	[mutationTypes.updateCurrentUserStart](state) {
		state.isSubmitting = true;
		state.validationErrors = null;
	},
	[mutationTypes.updateCurrentUserSuccess](state) {
		state.isSubmitting = false;
		state.validationErrors = null;
	},
	[mutationTypes.updateCurrentUserFailure](state, payload) {
		state.isSubmitting = false;
		state.validationErrors = payload;
	},
};

export { mutations };
