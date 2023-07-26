import { getterTypes } from '@/store/getter-types/getter-types';

const getters = {
	[getterTypes.currentUser]: (state) => state.currentUser,
	[getterTypes.isSubmiting]: (state) => state.isSubmiting,
	[getterTypes.isLoggedIn]: (state) => Boolean(state.isLoggedIn),
	[getterTypes.isAnonymous]: (state) => state.isLoggedIn === false,
	[getterTypes.validationErrors]: (state) => state.validationErrors,
};

export { getters };
