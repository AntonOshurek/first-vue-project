<template>
	<div class="article-header">
		<h2 class="article-header__title">{{ articleData.title }}</h2>

		<div class="article-header__user-info">
			<router-link
				class="article-header__username"
				:to="{ name: routesNames.userProfile, params: { slug: articleData.author.username } }"
				>{{ articleData.author.username }}</router-link
			>
			<time class="article-header__post-date" datetime="">
				{{ articleData.createdAt }}
			</time>

			<router-link
				class="article-header__user-image-link"
				:to="{ name: routesNames.userProfile, params: { slug: articleData.author.username } }"
			>
				<img class="article-header__author-image" :src="articleData.author.image" alt="" />
			</router-link>

			<div class="article-header__controls">
				<button class="article-header__button">Follow {{ articleData.author.username }}</button>
				<button class="article-header__button article-header__button--favorite">
					favorite article

					<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
						<path
							d="M480-219.5 468-231q-95.133-86.184-157.067-146.092Q249-437 214.216-480.902q-34.785-43.901-48-78.473Q153-593.947 153-628.5q0-64.505 45.498-110.002Q243.995-784 308.5-784q49.466 0 93.983 27.5t77.517 81q33.5-53.5 77.75-81T651.5-784q64.505 0 110.002 45.443Q807-693.114 807-628.692q0 34.73-12.716 68.309-12.715 33.58-47.464 76.924-34.749 43.345-96.901 104.366Q587.766-318.072 490-229l-10 9.5Z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { routesNames } from '@/variables/rotes';

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
};
</script>

<style>
@import './article-header.scss';
</style>
