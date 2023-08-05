import { mutationTypes } from '@/store/mutation-types/mutation-types';

const mutations = {
	[mutationTypes.addLikeStart]() {},
	[mutationTypes.addLikeSuccess]() {},
	[mutationTypes.addLikeFailure]() {},
};

export { mutations };
