<template>
	<section class="feed">
		<h3 class="visually-hidden">feed overview</h3>

		<div v-if="isLoading">Loading...</div>

		<div v-if="error">Something bad happened.</div>

		<ul class="feed-list" v-if="feedData">
			<li class="feed-overview__item" v-for="(article, index) in feedData.articles" :key="index">
				<article class="feed-article">
					<header class="feed-articel__header">
						<p class="feed-article__username">{{ article.author.username }}</p>
						<time class="feed-article__post-date" datetime="">
							{{ article.createdAt }}
						</time>
						<img class="feed-article__author-image" :src="article.author.image" alt="" />

						<button class="feed-article__likes" type="button">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20"
								viewBox="0 -960 960 960"
								width="20"
							>
								<path
									d="M480-219.5 468-231q-95.133-86.184-157.067-146.092Q249-437 214.216-480.902q-34.785-43.901-48-78.473Q153-593.947 153-628.5q0-64.505 45.498-110.002Q243.995-784 308.5-784q49.466 0 93.983 27.5t77.517 81q33.5-53.5 77.75-81T651.5-784q64.505 0 110.002 45.443Q807-693.114 807-628.692q0 34.73-12.716 68.309-12.715 33.58-47.464 76.924-34.749 43.345-96.901 104.366Q587.766-318.072 490-229l-10 9.5Z"
								/>
							</svg>
							{{ article.favoritesCount }}
						</button>
					</header>

					<h4 class="feed-article__title">{{ article.title }}</h4>
					<p class="feed-article__description">{{ article.description }}</p>

					<div class="feed-article__additionally">
						<a class="feed-article__read-more" href="#">read more...</a>

						<div class="feed-article__tags">
							<span class="feed-article__tag" v-for="(tag, index) in article.tagList" :key="index">
								{{ tag }}
							</span>
						</div>
					</div>
				</article>
			</li>
		</ul>
	</section>
</template>

<!-- https://demo.realworld.io/#/ -->

<script>
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import { actionTypes } from '@/store/action-types/action-types';

export default {
	name: 'McvFeed',
	props: {
		apiUrl: {
			type: String,
			requred: true,
		},
	},
	computed: {
		...mapGetters({
			isLoading: getterTypes.isLoading,
			feedData: getterTypes.feedData,
			error: getterTypes.error,
		}),
	},
	mounted() {
		this.$store.dispatch(actionTypes.getFeed, { apiUrl: this.apiUrl });
	},
	watch: {
		feedData: {
			handler(newValue) {
				console.log(newValue);
			},
			immediate: true,
		},
	},
};
</script>

<style>
@import './feed.scss';
</style>
