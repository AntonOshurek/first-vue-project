import { getterTypes } from '@/store/getter-types/getter-types';

const getters = {
	[getterTypes.popularTagsData]: (state) => state.data,
	[getterTypes.popularTagsLoading]: (state) => state.isLoading,
	[getterTypes.popularTagsError]: (state) => state.error,
};

export { getters };
