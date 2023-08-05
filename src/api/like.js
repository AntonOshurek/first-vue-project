import axios from '@/api/axios';

const getUrl = (slug) => `/articles/${slug}/favorite`;

const addLike = (slug) => {
	const url = getUrl(slug);
	return axios.post(url).then((res) => {
		return res.data.article;
	});
};

const removeLike = (slug) => {
	const url = getUrl(slug);
	return axios.delete(url).then((res) => {
		return res.data.article;
	});
};

export { addLike, removeLike };
