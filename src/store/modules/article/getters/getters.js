import { getterTypes } from '@/store/getter-types/getter-types';

const getters = {
	[getterTypes.articleData]: (state) => state.data,
	[getterTypes.articleLoading]: (state) => state.isLoading,
	[getterTypes.articleError]: (state) => state.getArticleError,

	[getterTypes.deleteArticleProcessing]: (state) => state.deleteArticleProcessing,
	[getterTypes.deleteArticleError]: (state) => state.deleteArticleError,
};

export { getters };
