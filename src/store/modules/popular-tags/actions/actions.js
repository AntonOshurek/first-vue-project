import { actionTypes } from '@/store/action-types/action-types';
import { mutationTypes } from '@/store/mutation-types/mutation-types';
import { getPopularTags } from '@/api/popular-tags';

const actions = {
	[actionTypes.getPopularTags](context) {
		return new Promise((resolve) => {
			context.commit(mutationTypes.getPopularTagsStart);

			getPopularTags()
				.then((res) => {
					const data = res;

					context.commit(mutationTypes.getPopularTagsSuccess, data);
					resolve(data);
				})
				.catch((err) => {
					console.log(err);
					context.commit(mutationTypes.getPopularTagsFailure, err);
				});
		});
	},
};

export { actions };
