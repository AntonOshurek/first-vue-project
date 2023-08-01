<template>
	<div class="article">
		<main class="article__main">
			<section class="article-header-wrap">
				<McvLoading v-if="isLoading" />

				<McvArticleHeader :article-data="articleData" v-if="articleData" />
			</section>
			<section class="article__body" v-if="articleData">
				<p class="article__text">{{ articleData.body }}</p>

				<McvArticleTags :tags-array="articleData.tagList" />

				<!-- <div class="feed-article__tags">
					<span class="feed-article__tag" v-for="(tag, index) in articleData.tagList" :key="index">
						{{ tag }}
					</span>
				</div> -->
			</section>
		</main>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { actionTypes } from '@/store/action-types/action-types';
import { getterTypes } from '@/store/getter-types/getter-types';
import { McvLoading } from '@/components';
import { routesNames } from '@/variables/rotes';
import { McvArticleHeader, McvArticleTags } from '@/components';

export default {
	name: 'McvArticle',
	computed: {
		...mapGetters({
			isLoading: getterTypes.articleLoading,
			articleData: getterTypes.articleData,
			error: getterTypes.articleError,
		}),
		routesNames() {
			return routesNames;
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
	},
	components: {
		McvLoading,
		McvArticleHeader,
		McvArticleTags,
	},
};
</script>

<style>
@import './article.scss';
</style>
