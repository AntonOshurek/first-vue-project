class StorageService {
	getItem = (key) => {
		try {
			return JSON.parse(localStorage.getItem(key));
		} catch (err) {
			console.log('error getting data from lockalstorage', err);
			return null;
		}
	};

	setItem = (key, data) => {
		try {
			localStorage.setItem(key, JSON.stringify(data));
		} catch (err) {
			console.log('error saving data to lockalstorage', err);
		}
	};
}

const storageService = new StorageService();

export default storageService;
