import { getterTypes } from '@/store/getter-types/getter-types';

const getters = {
	[getterTypes.settingsIsSubmitting]: (state) => state.isSubmitting,
	[getterTypes.settingsValidationErrors]: (state) => state.validationErrors,
};

export { getters };
