<template>
	<div class="article-header">
		<h2 class="article-header__title">{{ articleData.title }}</h2>

		<div class="article-header__user-info">
			<McvArticleAuthor :article-data="articleData" />

			<McvCommonArticleControls v-if="!isAuthor" :article-data="articleData" />

			<McvUserArticleControls v-if="isAuthor" :article-data="articleData" />
		</div>
	</div>
</template>

<script>
import { routesNames } from '@/variables/rotes';
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
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
		...mapGetters({
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
