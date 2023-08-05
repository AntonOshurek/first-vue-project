import { getterTypes } from '@/store/getter-types/getter-types';

const getters = {
	[getterTypes.userProfileData]: (state) => state.data,
	[getterTypes.userProfileLoading]: (state) => state.isLoading,
	[getterTypes.userProfileError]: (state) => state.error,
};

export { getters };
