<template>
	<nav class="global-feed__nav">
		<router-link class="global-feed__nav-link" :to="{ name: routesNames.yourFeed }"
			>Your Feed</router-link
		>
		<router-link class="global-feed__nav-link" :to="{ name: routesNames.globalFeed }"
			>Global Feed</router-link
		>
	</nav>
</template>

<script>
import { routesNames } from '@/variables/rotes';

export default {
	name: 'McvFeedNavigation',
	computed: {
		routesNames() {
			return routesNames;
		},
	},
};
</script>

<style>
@import './feed-navigation.scss';
</style>
