<template>
	<div class="popular-tags">
		<div class="popular-tags__wrap">
			<h3 class="popular-tags__title">Popular Tags</h3>
			<ul class="popular-tags__list">
				<li class="popular-tags__item">
					<router-link
						class="popular-tags__link"
						:to="{ name: routesNames.tag, params: { slug: 'tag-name' } }"
					>
						tsfghfsghfag
					</router-link>
				</li>
				<li class="popular-tags__item">
					<router-link
						class="popular-tags__link"
						:to="{ name: routesNames.tag, params: { slug: 'tag-name' } }"
					>
						tag
					</router-link>
				</li>
				<li class="popular-tags__item">
					<router-link
						class="popular-tags__link"
						:to="{ name: routesNames.tag, params: { slug: 'tag-name' } }"
					>
						sdfgh
					</router-link>
				</li>
				<li class="popular-tags__item">
					<router-link
						class="popular-tags__link"
						:to="{ name: routesNames.tag, params: { slug: 'tag-name' } }"
					>
						sdfgdfsg
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { routesNames } from '@/variables/rotes';

export default {
	name: 'McvPopularTags',
	computed: {
		routesNames() {
			return routesNames;
		},
	},
};
</script>

<style>
@import './popular-tags.scss';
</style>
