<template>
	<nav class="nav">
		<router-link class="nav__link" :to="{ name: 'home' }" exact active-class="nav__link--active"
			>Home</router-link
		>
		<router-link class="nav__link" :to="{ name: 'login' }" active-class="nav__link--active"
			>Sign in</router-link
		>
		<router-link class="nav__link" :to="{ name: 'register' }" active-class="nav__link--active"
			>Sign up</router-link
		>
	</nav>
</template>

<script>
export default {
	name: 'McvGuestNav',
};
</script>

<style>
@import './guest-nav.scss';
@import '../nav.scss';
</style>
