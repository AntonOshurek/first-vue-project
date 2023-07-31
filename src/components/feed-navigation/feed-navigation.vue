<template>
	<nav class="global-feed__nav">
		<h2 class="visually-hidden">Feed navigation</h2>

		<router-link
			v-if="isLoggedIn"
			class="global-feed__nav-link"
			:to="{ name: routesNames.yourFeed }"
			active-class="global-feed__nav-link--active"
			>Your Feed</router-link
		>

		<router-link
			class="global-feed__nav-link"
			:to="{ name: routesNames.globalFeed }"
			active-class="global-feed__nav-link--active"
			>Global Feed</router-link
		>

		<p class="global-feed__nav-link global-feed__nav-link--active" v-if="tagName">
			<span class="global-feed__nav-link-hash">#</span> {{ tagName }}
		</p>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex';
import { routesNames } from '@/variables/rotes';
import { getterTypes } from '@/store/getter-types/getter-types';

export default {
	name: 'McvFeedNavigation',
	computed: {
		...mapGetters({
			isLoggedIn: getterTypes.isLoggedIn,
		}),
		routesNames() {
			return routesNames;
		},
	},
	props: {
		tagName: {
			type: String,
			required: false,
		},
	},
};
</script>

<style>
@import './feed-navigation.scss';
</style>
