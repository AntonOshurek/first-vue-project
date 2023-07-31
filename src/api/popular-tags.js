import axios from '@/api/axios';

const getPopularTags = () => {
	return axios
		.get('/tags')
		.then((res) => {
			return res.data.tags;
		})
		.catch((err) => {
			throw new Error(err.message);
		});
};

export { getPopularTags };
