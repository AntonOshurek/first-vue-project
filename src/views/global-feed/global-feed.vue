<template>
	<div class="global-feed">
		<main class="global-feed__main">
			<h2 class="visually-hidden">Feed page</h2>

			<McvFeedNavigation />

			<McvPopularTags />

			<McvFeed :apiUrl="apiUrl" />
		</main>
	</div>
</template>

<script>
import { McvFeed, McvPopularTags, McvFeedNavigation } from '@/components/';

export default {
	name: 'McvGlobalFeed',
	components: {
		McvFeed,
		McvPopularTags,
		McvFeedNavigation,
	},
	data() {
		return {
			apiUrl: '/articles',
		};
	},
};
</script>

<style>
@import './global-feed.scss';
</style>
