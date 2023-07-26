import { mutationTypes } from '@/store/mutation-types/mutation-types';

const mutations = {
	[mutationTypes.getFeedStart](state) {
		state.isLoading = true;
		state.data = null;
	},
	[mutationTypes.getFeedSuccess](state, payload) {
		state.isLoading = false;
		state.data = payload;
	},
	[mutationTypes.getFeedFailure](state) {
		state.isLoading = false;
		state.data = null;
	},
};

export { mutations };
