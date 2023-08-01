<template>
	<div class="article-header">
		<h2 class="article-header__title">{{ articleData.title }}</h2>

		<div class="article-header__user-info">
			<McvArticleAuthor :article-data="articleData" />

			<McvArticleControls :article-data="articleData" />
		</div>
	</div>
</template>

<script>
import { routesNames } from '@/variables/rotes';
import McvArticleAuthor from '@/components/article-author/article-author';
import McvArticleControls from '@/components/article-controls/article-controls';

export default {
	name: 'McvArticleHeader',
	props: {
		articleData: {
			type: Object,
			required: false,
		},
	},
	computed: {
		routesNames() {
			return routesNames;
		},
	},
	components: {
		McvArticleAuthor,
		McvArticleControls,
	},
};
</script>

<style>
@import './article-header.scss';
</style>
