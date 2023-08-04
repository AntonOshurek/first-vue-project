import { mutationTypes } from '@/store/mutation-types/mutation-types';

const mutations = {
	[mutationTypes.editArticleStart](state) {
		state.isSubmiting = true;
	},
	[mutationTypes.editArticleSuccess](state) {
		state.isSubmiting = false;
	},
	[mutationTypes.editArticleFailure](state, payload) {
		state.isSubmiting = false;
		state.validationErrors = payload;
	},
	[mutationTypes.getArticleForEditStart](state) {
		state.isLoading = true;
		state.article = null;
		state.getArticleError = null;
	},
	[mutationTypes.getArticleForEditSuccess](state, payload) {
		state.isLoading = false;
		state.article = payload;
	},
	[mutationTypes.getArticleForEditFailure](state, payload) {
		state.isLoading = false;
		state.article = null;
		state.getArticleError = payload;
	},
};

export { mutations };
