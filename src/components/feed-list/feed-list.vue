<template>
	<ul class="feed-list">
		<li class="feed-list__item" v-for="(article, index) in feedData.articles" :key="index">
			<article class="feed-article">
				<header class="feed-articel__header">
					<router-link
						class="feed-article__username"
						:to="{ name: routesNames.userProfile, params: { slug: article.author.username } }"
						>{{ article.author.username }}</router-link
					>
					<time class="feed-article__post-date" datetime="">
						{{ article.createdAt }}
					</time>

					<router-link
						class="feed-article__user-image-link"
						:to="{ name: routesNames.userProfile, params: { slug: article.author.username } }"
					>
						<img class="feed-article__author-image" :src="article.author.image" alt="" />
					</router-link>

					<McvFeedArticleLikeButton
						:isFavorited="article.favorited"
						:likesCount="Number(article.favoritesCount)"
						:articleSlug="article.slug"
					/>
				</header>

				<h4 class="feed-article__title">{{ article.title }}</h4>
				<p class="feed-article__description">{{ article.description }}</p>

				<div class="feed-article__additionally">
					<router-link
						class="feed-article__read-more"
						:to="{ name: routesNames.article, params: { slug: article.slug } }"
						>read more...</router-link
					>

					<McvTagList :tags-array="article.tagList" />
				</div>
			</article>
		</li>
	</ul>
</template>

<script>
import { routesNames } from '@/variables/rotes';
import McvTagList from '@/components/tag-list/tag-list';
import McvFeedArticleLikeButton from '@/components/feed-article-like-button/feed-article-like-button';

export default {
	name: 'McvFeedList',
	computed: {
		routesNames() {
			return routesNames;
		},
	},
	props: {
		feedData: {
			type: Object,
			required: true,
		},
	},
	components: {
		McvTagList,
		McvFeedArticleLikeButton,
	},
};
</script>

<style>
@import './feed-list.scss';
</style>
