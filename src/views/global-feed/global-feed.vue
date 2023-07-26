<template>
	<div class="global-feed">
		<main class="global-feed__main">
			<h2>Global</h2>

			<McvFeed :apiUrl="apiUrl" />
		</main>
	</div>
</template>

<script>
import { McvFeed } from '@/components/';

export default {
	name: 'McvGlobalFeed',
	components: {
		McvFeed,
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
