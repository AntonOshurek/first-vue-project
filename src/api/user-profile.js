import axios from './axios';

const getUserProfile = (slug) => {
	return axios.get(`/profiles/${slug}`).then((res) => {
		return res.data.profile;
	});
};

export { getUserProfile };
