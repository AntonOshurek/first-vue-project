import { actionTypes } from '@/store/action-types/action-types';
import { mutationTypes } from '@/store/mutation-types/mutation-types';
import { addLike, removeLike } from '@/api/like';

const actions = {
	[actionTypes.addLike](context, { slug, isFavorited }) {
		return new Promise((resolve) => {
			context.commit(mutationTypes.addLikeStart);

			if (isFavorited) {
				removeLike(slug)
					.then((res) => {
						const data = res;

						context.commit(mutationTypes.addLikeSuccess, data);
						resolve(data);
					})
					.catch((err) => {
						context.commit(mutationTypes.addLikeFailure, err);
					});
			} else {
				addLike(slug)
					.then((res) => {
						const data = res;

						context.commit(mutationTypes.addLikeSuccess, data);
						resolve(data);
					})
					.catch((err) => {
						context.commit(mutationTypes.addLikeFailure, err);
					});
			}
		});
	},
};

export { actions };
