import axios from 'axios';
import storageService from '@/services/storageService';
import { storageNameForToken } from '@/variables/variables';

// https://demo.realworld.io/#/

axios.defaults.baseURL = 'https://conduit.productionready.io/api';
axios.interceptors.request.use((config) => {
	const token = storageService.getItem(storageNameForToken);
	const authorizationToken = token ? `Token ${token}` : '';
	config.headers.Authorization = authorizationToken;

	return config;
});

export default axios;
