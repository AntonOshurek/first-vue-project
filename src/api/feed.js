import axios from './axios';

const getFeed = (apiUrl) => {
	return axios
		.get(apiUrl)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			throw new Error(err.message);
		});
};

export { getFeed };
