import { mutationTypes } from '@/store/mutation-types/mutation-types';

const mutations = {
	[mutationTypes.getArticleStart](state) {
		state.isLoading = true;
		state.data = null;
		state.deleteArticleError = null;
		state.getArticleError = null;
	},
	[mutationTypes.getArticleSuccess](state, payload) {
		state.isLoading = false;
		state.data = payload;
	},
	[mutationTypes.getArticleFailure](state, payload) {
		state.isLoading = false;
		state.data = null;
		state.getArticleError = payload;
	},

	[mutationTypes.deleteArticleStart](state) {
		state.deleteArticleProcessing = true;
		state.deleteArticleError = null;
	},
	[mutationTypes.deleteArticleSuccess](state) {
		state.deleteArticleProcessing = false;
		state.data = null;
		state.deleteArticleError = null;
	},
	[mutationTypes.deleteArticleFailure](state, payload) {
		state.deleteArticleProcessing = false;
		state.deleteArticleError = payload;
	},
};

export { mutations };
