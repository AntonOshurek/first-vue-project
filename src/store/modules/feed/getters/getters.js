import { getterTypes } from '@/store/getter-types/getter-types';

const getters = {
	[getterTypes.feedData]: (state) => state.data,
};

export { getters };
