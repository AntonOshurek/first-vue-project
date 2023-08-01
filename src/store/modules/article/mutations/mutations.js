import { mutationTypes } from '@/store/mutation-types/mutation-types';

const mutations = {
	[mutationTypes.getArticleStart](state) {
		state.isLoading = true;
		state.data = null;
	},
	[mutationTypes.getArticleSuccess](state, payload) {
		state.isLoading = false;
		state.data = payload;
	},
	[mutationTypes.getArticleFailure](state, payload) {
		state.isLoading = false;
		state.data = null;
		state.error = payload;
	},
};

export { mutations };
