<template>
	<div class="global-feed">
		<main class="global-feed__main">
			<h2 class="visually-hidden">Your feed page</h2>

			<McvFeedNavigation />

			<McvPopularTags />

			<McvFeed :apiUrl="apiUrl" />
		</main>
	</div>
</template>

<script>
import { McvFeed, McvPopularTags, McvFeedNavigation } from '@/components/';

export default {
	name: 'McvYourFeed',
	components: {
		McvFeed,
		McvPopularTags,
		McvFeedNavigation,
	},
	data() {
		return {
			apiUrl: '/articles/feed',
		};
	},
};
</script>

<style>
@import './your-feed.scss';
</style>
