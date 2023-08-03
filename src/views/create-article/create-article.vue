<template>
	<div class="create-article">
		<main class="create-article__main">
			<h2 class="visually-hidden">Create article page</h2>

			<McvValidationErrors v-if="validationErrors" :validation-errors="validationErrors" />

			<McvArticleForm
				:initial-value="initialValue"
				:errors="validationErrors"
				:is-submiting="isSubmiting"
				@articleSubmit="onSubmit"
			/>
		</main>
	</div>
</template>

<script>
import { McvArticleForm, McvValidationErrors } from '@/components';

export default {
	name: 'McvCreateArticle',
	data() {
		return {
			initialValue: {
				title: '',
				description: '',
				body: '',
				tagList: [],
			},
			validationErrors: null,
			isSubmiting: false,
		};
	},
	methods: {
		onSubmit(data) {
			console.log('onSubmit in createArticle');
			console.log(data);
		},
	},
	components: {
		McvArticleForm,
		McvValidationErrors,
	},
};
</script>

<style>
@import './create-article.scss';
</style>
