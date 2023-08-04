import { getterTypes } from '@/store/getter-types/getter-types';

const getters = {
	[getterTypes.editArticleIsSubmiting]: (state) => state.isSubmiting,
	[getterTypes.editArticleValidationError]: (state) => state.validationErrors,
	[getterTypes.getArticleForEditError]: (state) => state.validationErrors,
	[getterTypes.editArticleIsLoading]: (state) => state.isLoading,
	[getterTypes.editArticleData]: (state) => state.article,
};

export { getters };
