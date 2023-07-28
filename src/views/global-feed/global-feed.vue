<template>
	<div class="global-feed">
		<main class="global-feed__main">
			<h2 class="visually-hidden">Feed page</h2>
			<nav class="global-feed__nav">
				<a class="global-feed__nav-link" href="#">Your Feed</a>
				<a class="global-feed__nav-link" href="#">Global Feed</a>
			</nav>

			<McvPopularTags />

			<McvFeed :apiUrl="apiUrl" />
		</main>
	</div>
</template>

<script>
import { McvFeed, McvPopularTags } from '@/components/';

export default {
	name: 'McvGlobalFeed',
	components: {
		McvFeed,
		McvPopularTags,
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
