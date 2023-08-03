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
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import { actionTypes } from '@/store/action-types/action-types';
import { McvArticleForm, McvValidationErrors } from '@/components';
import { routesNames } from '@/variables/rotes';

export default {
	name: 'McvCreateArticle',
	computed: {
		...mapGetters({
			isSubmiting: getterTypes.createArticleIsSubmiting,
			error: getterTypes.createArticleError,
		}),
	},
	data() {
		return {
			initialValue: {
				title: '',
				description: '',
				body: '',
				tagList: [],
			},
		};
	},
	methods: {
		onSubmit(articleInput) {
			this.$store.dispatch(actionTypes.createArticle, { articleInput }).then((article) => {
				this.$router.push({ name: routesNames.article, params: { slug: article.slug } });
				console.log(article);
			});
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
