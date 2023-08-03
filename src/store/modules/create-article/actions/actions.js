import { actionTypes } from '@/store/action-types/action-types';
import { mutationTypes } from '@/store/mutation-types/mutation-types';
import { createArticle } from '@/api/article';

const actions = {
	[actionTypes.createArticle](context, { articleInput }) {
		return new Promise((resolve) => {
			context.commit(mutationTypes.createArticleStart);

			createArticle(articleInput)
				.then((res) => {
					context.commit(mutationTypes.createArticleSuccess);
					resolve(res);
				})
				.catch((err) => {
					context.commit(mutationTypes.createArticleFailure, err);
				});
		});
	},
};

export { actions };
