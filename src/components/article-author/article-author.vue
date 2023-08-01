<template>
	<div class="article-author">
		<router-link
			class="article-author__username"
			:to="{ name: routesNames.userProfile, params: { slug: articleData.author.username } }"
			>{{ articleData.author.username }}</router-link
		>
		<time class="article-author__post-date" datetime="">
			{{ articleData.createdAt }}
		</time>

		<router-link
			class="article-author__user-image-link"
			:to="{ name: routesNames.userProfile, params: { slug: articleData.author.username } }"
		>
			<img class="article-author__author-image" :src="articleData.author.image" alt="" />
		</router-link>
	</div>
</template>

<script>
import { routesNames } from '@/variables/rotes';

export default {
	name: 'McvArticleAuthor',
	props: {
		articleData: {
			type: Object,
			required: true,
		},
	},
	computed: {
		routesNames() {
			return routesNames;
		},
	},
};
</script>

<style>
@import './article-author.scss';
</style>
