import { mutationTypes } from '@/store/mutation-types/mutation-types';

const mutations = {
	[mutationTypes.getUserProfileStart](state) {
		state.isLoading = true;
		state.data = null;
	},
	[mutationTypes.getUserProfileSuccess](state, payload) {
		state.isLoading = false;
		state.data = payload;
	},
	[mutationTypes.getUserProfileFailure](state, payload) {
		state.isLoading = false;
		state.error = payload;
	},
};

export { mutations };
