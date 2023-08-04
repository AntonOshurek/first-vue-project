import { actionTypes } from '@/store/action-types/action-types';
import { mutationTypes } from '@/store/mutation-types/mutation-types';
import { updateArticle, getArticle } from '@/api/article';

const actions = {
	[actionTypes.editArticle](context, { slug, articleInput }) {
		return new Promise((resolve) => {
			context.commit(mutationTypes.editArticleStart);

			updateArticle(slug, articleInput)
				.then((article) => {
					context.commit(mutationTypes.editArticleSuccess, article);
					resolve(article);
				})
				.catch((err) => {
					context.commit(mutationTypes.editArticleFailure, err.response.data.errors);
				});
		});
	},
	[actionTypes.getArticleForEdit](context, params) {
		const { slug } = params;

		return new Promise((resolve) => {
			context.commit(mutationTypes.getArticleForEditStart);

			getArticle(slug)
				.then((res) => {
					const article = res;

					context.commit(mutationTypes.getArticleForEditSuccess, article);
					resolve(article);
				})
				.catch((err) => {
					context.commit(mutationTypes.getArticleForEditFailure, err);
				});
		});
	},
};

export { actions };
