<template>
	<div class="article-header">
		<h2 class="article-header__title">{{ articleData.title }}</h2>

		<div class="article-header__user-info">
			<McvArticleAuthor :article-data="articleData" />

			<McvCommonArticleControls :article-data="articleData" />

			<McvUserArticleControls :article-data="articleData" />
		</div>
	</div>
</template>

<script>
import { routesNames } from '@/variables/rotes';
import McvArticleAuthor from '@/components/article-author/article-author';
import McvCommonArticleControls from '@/components/article-controls/common-article-controls/common-article-controls';
import McvUserArticleControls from '@/components/article-controls/user-article-controls/user-article-controls';

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
		McvCommonArticleControls,
		McvUserArticleControls,
	},
};
</script>

<style>
@import './article-header.scss';
</style>
