<template>
	<div class="article">
		<main class="article__main">
			<section class="article-header-wrap">
				<div
					class="article__system-info"
					v-if="getArticleError || deleteArticleError || isLoading || deleteArticleProcessing"
				>
					<McvLoading v-if="isLoading || deleteArticleProcessing" />

					<McvError
						v-if="getArticleError || deleteArticleError"
						:message="getArticleError || deleteArticleError"
					/>
				</div>

				<McvArticleHeader :article-data="articleData" v-if="articleData" />
			</section>
			<section class="article__body" v-if="articleData">
				<p class="article__text">{{ articleData.body }}</p>

				<McvTagList :tags-array="articleData.tagList" class="article__tags" />
			</section>

			<div class="article__bottom-controls" v-if="articleData">
				<McvArticleAuthor :article-data="articleData" />

				<McvCommonArticleControls v-if="!isAuthor" :article-data="articleData" />

				<McvUserArticleControls v-if="isAuthor" :article-data="articleData" />
			</div>

			<McvCommentForm />
		</main>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { actionTypes } from '@/store/action-types/action-types';
import { getterTypes } from '@/store/getter-types/getter-types';
import { McvLoading } from '@/components';
import { routesNames } from '@/variables/rotes';
import {
	McvArticleHeader,
	McvTagList,
	McvCommonArticleControls,
	McvUserArticleControls,
	McvArticleAuthor,
	McvCommentForm,
} from '@/components';
import McvError from '@/components/error/error';

export default {
	name: 'McvArticle',
	computed: {
		...mapGetters({
			isLoading: getterTypes.articleLoading,
			articleData: getterTypes.articleData,
			getArticleError: getterTypes.articleError,
			currentUser: getterTypes.currentUser,
			isLoggedIn: getterTypes.isLoggedIn,
			deleteArticleProcessing: getterTypes.deleteArticleProcessing,
			deleteArticleError: getterTypes.deleteArticleError,
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
		getArticleError: {
			handler(error) {
				console.log(error);
			},
			immediate: true,
		},
	},
	components: {
		McvLoading,
		McvArticleHeader,
		McvTagList,
		McvError,
		McvCommonArticleControls,
		McvUserArticleControls,
		McvArticleAuthor,
		McvCommentForm,
	},
};
</script>

<style>
@import './article.scss';
</style>
