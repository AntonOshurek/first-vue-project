import axios from '@/api/axios';

const getArticle = (slug) => {
	return axios
		.get(`/articles/${slug}`)
		.then((res) => {
			return res.data.article;
		})
		.catch((err) => {
			throw new Error(err.message);
		});
};

export { getArticle };
