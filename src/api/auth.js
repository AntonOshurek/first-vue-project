import axios from './axios';

class AuthApi {
	#axiosInstance = null;

	constructor(axiosInstance) {
		this.#axiosInstance = axiosInstance;
	}

	register = (credentials) => {
		return this.#axiosInstance.post('/users', { user: credentials });
	};

	login = (credentials) => {
		return this.#axiosInstance.post('/users/login', { user: credentials });
	};

	getCurrentUser = () => {
		return this.#axiosInstance.get('/user');
	};
}

const authApi = new AuthApi(axios);

export default authApi;
