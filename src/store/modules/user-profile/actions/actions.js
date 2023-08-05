import { actionTypes } from '@/store/action-types/action-types';
import { mutationTypes } from '@/store/mutation-types/mutation-types';
import { getUserProfile } from '@/api/user-profile';

const actions = {
	[actionTypes.getUserprofile](context, { slug }) {
		return new Promise((resolve) => {
			context.commit(mutationTypes.getUserProfileStart);

			getUserProfile(slug)
				.then((userProfile) => {
					context.commit(mutationTypes.getUserProfileSuccess, userProfile);
					resolve(userProfile);
				})
				.catch((err) => {
					console.log(err);
					context.commit(mutationTypes.getUserProfileFailure, err);
				});
		});
	},
};

export { actions };
