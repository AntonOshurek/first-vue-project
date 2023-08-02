import { actionTypes } from '@/store/action-types/action-types';
import { mutationTypes } from '@/store/mutation-types/mutation-types';
import { getArticle, deleteArticle } from '@/api/article';

const actions = {
	[actionTypes.getArticle](context, params) {
		const { slug } = params;

		return new Promise((resolve) => {
			context.commit(mutationTypes.getArticleStart);

			getArticle(slug)
				.then((res) => {
					const article = res;

					context.commit(mutationTypes.getArticleSuccess, article);
					resolve(article);
				})
				.catch((err) => {
					context.commit(mutationTypes.getArticleFailure, err);
				});
		});
	},
	[actionTypes.deleteArticle](context, params) {
		const { slug } = params;

		return new Promise((resolve) => {
			context.commit(mutationTypes.deleteArticleStart);

			deleteArticle(slug)
				.then(() => {
					context.commit(mutationTypes.deleteArticleSuccess);
					resolve();
				})
				.catch((err) => {
					context.commit(mutationTypes.deleteArticleFailure, err.message);
				});
		});
	},
};

export { actions };
