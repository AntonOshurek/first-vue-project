import { mutationTypes } from '@/store/mutation-types/mutation-types';

const mutations = {
	[mutationTypes.createArticleStart](state) {
		state.isSubmiting = true;
	},
	[mutationTypes.createArticleSuccess](state) {
		state.isSubmiting = false;
	},
	[mutationTypes.createArticleFailure](state, payload) {
		state.isSubmiting = false;
		state.validationErrors = payload;
	},
};

export { mutations };
