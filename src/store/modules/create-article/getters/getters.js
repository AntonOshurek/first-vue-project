import { getterTypes } from '@/store/getter-types/getter-types';

const getters = {
	[getterTypes.createArticleIsSubmiting]: (state) => state.isSubmiting,
	[getterTypes.createArticleError]: (state) => state.validationErrors,
};

export { getters };
