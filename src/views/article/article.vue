<template>
	<div class="article">
		<main class="article__main">
			<section class="article-header-wrap">
				<div
					class="article__system-info"
					v-if="articleError || deleteArticleError || isLoading || deleteArticleProcessing"
				>
					<McvLoading v-if="isLoading || deleteArticleProcessing" />

					<McvError
						v-if="articleError || deleteArticleError"
						:message="articleError || deleteArticleError"
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
import { routesNames } from '@/variables/rotes';
import {
	McvArticleHeader,
	McvTagList,
	McvCommonArticleControls,
	McvUserArticleControls,
	McvArticleAuthor,
	McvCommentForm,
	McvLoading,
	McvError,
} from '@/components';

export default {
	name: 'McvArticle',
	computed: {
		...mapGetters({
			isLoading: getterTypes.articleLoading,
			articleData: getterTypes.articleData,
			articleError: getterTypes.articleError,
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
