<template>
	<div class="article-editor">
		<main class="article-editor__main">
			<h2 class="visually-hidden">Edit article page</h2>
			<McvLoading v-if="editArticleIsLoading || editArticleIsSubmiting" />

			<McvValidationErrors
				v-if="editArticleValidationError"
				:validation-errors="editArticleValidationError"
			/>

			<div v-if="editArticleData && isAuthor && !editArticleIsLoading && !getArticleForEditError">
				<McvArticleForm
					:initial-value="initialValue"
					:is-submiting="editArticleIsSubmiting"
					@articleSubmit="onSubmit"
				/>
			</div>
		</main>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { actionTypes } from '@/store/action-types/action-types';
import { getterTypes } from '@/store/getter-types/getter-types';
import { McvArticleForm, McvLoading, McvValidationErrors } from '@/components';
import { routesNames } from '@/variables/rotes';

export default {
	name: 'McvEditArticle',
	computed: {
		...mapGetters({
			currentUser: getterTypes.currentUser,
			isLoggedIn: getterTypes.isLoggedIn,
			editArticleIsSubmiting: getterTypes.editArticleIsSubmiting,
			editArticleValidationError: getterTypes.editArticleValidationError,
			getArticleForEditError: getterTypes.getArticleForEditError,
			editArticleIsLoading: getterTypes.editArticleIsLoading,
			editArticleData: getterTypes.editArticleData,
		}),
		routesNames() {
			return routesNames;
		},
		isAuthor() {
			if (!this.currentUser || !this.editArticleData || !this.isLoggedIn) {
				return false;
			}
			return this.currentUser.username === this.editArticleData.author.username;
		},
		initialValue() {
			if (!this.editArticleData) {
				return {
					title: '',
					description: '',
					body: '',
					tagList: [],
				};
			} else {
				return {
					title: this.editArticleData.title,
					description: this.editArticleData.description,
					body: this.editArticleData.body,
					tagList: this.editArticleData.tagList,
				};
			}
		},
	},
	methods: {
		onSubmit(data) {
			this.$store
				.dispatch(actionTypes.editArticle, {
					slug: this.$route.params.slug,
					articleInput: data,
				})
				.then((article) => {
					this.$router.push({ name: routesNames.article, params: { slug: article.slug } });
				});
		},
	},
	mounted() {
		this.$store.dispatch(actionTypes.getArticleForEdit, { slug: this.$route.params.slug });
	},
	components: {
		McvArticleForm,
		McvLoading,
		McvValidationErrors,
	},
};
</script>

<style>
@import './edit-article.scss';
</style>
