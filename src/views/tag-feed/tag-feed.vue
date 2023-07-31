<template>
	<div class="global-feed">
		<main class="global-feed__main">
			<h2 class="visually-hidden">Tag feed page</h2>

			<McvFeedNavigation :tag-name="tagName" />

			<McvPopularTags />

			<McvFeed :apiUrl="apiUrl" :key="apiUrl" />
		</main>
	</div>
</template>

<script>
import { McvFeed, McvPopularTags, McvFeedNavigation } from '@/components/';

export default {
	name: 'McvTagFeed',
	components: {
		McvFeed,
		McvPopularTags,
		McvFeedNavigation,
	},
	computed: {
		tagName() {
			return this.$route.params.slug;
		},
		apiUrl() {
			const tagName = this.$route.params.slug;
			return `/articles?tag=${tagName}`;
		},
	},
};
</script>

<style>
@import './tag-feed.scss';
</style>
