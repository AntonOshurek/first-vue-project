import { actionTypes } from '@/store/action-types/action-types';
import { mutationTypes } from '@/store/mutation-types/mutation-types';
import { getFeed } from '@/api/feed';

const actions = {
	[actionTypes.getFeed](context, params) {
		const { apiUrl } = params;

		return new Promise((resolve, reject) => {
			context.commit(mutationTypes.getFeedStart);

			getFeed(apiUrl)
				.then((res) => {
					const data = res.data;

					context.commit(mutationTypes.getFeedSuccess, data);
					resolve(data);
				})
				.catch((err) => {
					context.commit(mutationTypes.getFeedFailure);
					reject(err);
				});
		});
	},
};

export { actions };
