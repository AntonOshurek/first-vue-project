import { getterTypes } from '@/store/getter-types/getter-types';

const getters = {
	[getterTypes.feedData]: (state) => state.data,
	[getterTypes.isLoading]: (state) => state.isLoading,
	[getterTypes.error]: (state) => state.error,
};

export { getters };
