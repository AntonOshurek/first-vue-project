<template>
	<div class="article-editor">
		<main class="article-editor__main">
			<h2 class="visually-hidden">Edit article page</h2>
			<McvLoading v-if="isLoading" />

			<McvError v-if="articleError" :message="articleError" />

			<McvValidationErrors v-if="validationErrors" :validation-errors="validationErrors" />

			<div v-if="articleData && isAuthor && !isLoading && !articleError">
				<McvArticleForm
					:initial-value="initialValue"
					:errors="validationErrors"
					:is-submiting="isSubmiting"
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
import { McvArticleForm, McvLoading, McvError, McvValidationErrors } from '@/components';
import { routesNames } from '@/variables/rotes';

export default {
	name: 'McvEditArticle',
	computed: {
		...mapGetters({
			isLoading: getterTypes.articleLoading,
			articleData: getterTypes.articleData,
			articleError: getterTypes.articleError,
			currentUser: getterTypes.currentUser,
			isLoggedIn: getterTypes.isLoggedIn,
		}),
		routesNames() {
			return routesNames;
		},
		isAuthor() {
			if (!this.currentUser || !this.articleData || !this.isLoggedIn) {
				return false;
			}

			return this.currentUser.username === this.articleData.author.username;
		},
	},
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
	mounted() {
		this.$store.dispatch(actionTypes.getArticle, { slug: this.$route.params.slug });
	},
	watch: {
		articleData: {
			handler(data) {
				console.log(data);

				// const newInitialData = {
				// 	title: data.title,
				// 	description: data.description,
				// 	body: data.description,
				// 	tagList: data.taglist,
				// };

				// this.initialValue = newInitialData;
			},
			immediate: true,
		},
		getArticleError: {
			handler(error) {
				console.log(error);
			},
			immediate: true,
		},
	},
	components: {
		McvArticleForm,
		McvLoading,
		McvError,
		McvValidationErrors,
	},
};
</script>

<style>
@import './edit-article.scss';
</style>
