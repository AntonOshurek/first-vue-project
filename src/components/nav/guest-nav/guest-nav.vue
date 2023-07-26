<template>
	<nav class="nav">
		<router-link
			class="nav__link"
			:to="{ name: routesNames.globalFeed }"
			exact
			active-class="nav__link--active"
			>Home</router-link
		>
		<router-link
			class="nav__link"
			:to="{ name: routesNames.login }"
			active-class="nav__link--active"
			>Sign in</router-link
		>
		<router-link
			class="nav__link"
			:to="{ name: routesNames.register }"
			active-class="nav__link--active"
			>Sign up</router-link
		>
	</nav>
</template>

<script>
import { routesNames } from '@/variables/rotes';

export default {
	name: 'McvGuestNav',
	computed: {
		routesNames() {
			return routesNames;
		},
	},
};
</script>

<style>
@import './guest-nav.scss';
@import '../nav.scss';
</style>
