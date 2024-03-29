import { mutationTypes } from '@/store/mutation-types/mutation-types';

const mutations = {
	[mutationTypes.getPopularTagsStart](state) {
		state.isLoading = true;
		state.data = null;
	},
	[mutationTypes.getPopularTagsSuccess](state, payload) {
		state.isLoading = false;
		state.data = payload;
	},
	[mutationTypes.getPopularTagsFailure](state, payload) {
		state.isLoading = false;
		state.error = payload;
	},
};

export { mutations };
