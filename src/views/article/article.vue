<template>
	<div>article</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { actionTypes } from '@/store/action-types/action-types';
import { getterTypes } from '@/store/getter-types/getter-types';

export default {
	name: 'McvArticle',
	computed: {
		...mapGetters({
			isLoading: getterTypes.articleLoading,
			articleData: getterTypes.articleData,
			error: getterTypes.articleError,
		}),
	},
	mounted() {
		this.$store.dispatch(actionTypes.getArticle, { slug: this.$route.params.slug });
	},
	watch: {
		articleData: {
			handler(data) {
				console.log(data);
			},
			immediate: true,
		},
	},
};
</script>

<style>
@import './article.scss';
</style>
