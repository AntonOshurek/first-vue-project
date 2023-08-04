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

const deleteArticle = (slug) => {
	return axios
		.delete(`/articles/${slug}`)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			throw new Error(err.message);
		});
};

const createArticle = (articleInput) => {
	return axios.post(`/articles`, { article: articleInput });
};

export { getArticle, deleteArticle, createArticle };
