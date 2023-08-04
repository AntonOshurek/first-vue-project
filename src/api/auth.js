import axios from './axios';

class AuthApi {
	#axiosInstance = null;

	constructor(axiosInstance) {
		this.#axiosInstance = axiosInstance;
	}

	register = (credentials) => {
		return this.#axiosInstance.post('/users', { user: credentials }).then((res) => {
			return res.data.user;
		});
	};

	login = (credentials) => {
		return this.#axiosInstance.post('/users/login', { user: credentials }).then((res) => {
			return res.data.user;
		});
	};

	getCurrentUser = () => {
		return this.#axiosInstance.get('/user').then((res) => {
			return res.data.user;
		});
	};

	updateCurrentUser(currentUserInput) {
		return axios.put('/user', { user: currentUserInput }).then((res) => {
			console.log('axios responce');
			console.log(res);
			return res.data.user;
		});
	}
}

const authApi = new AuthApi(axios);

export default authApi;
