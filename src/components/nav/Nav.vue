<template>
	<nav class="nav">
		<router-link class="nav__link" to="/">Home</router-link>
		<router-link class="nav__link" to="/login">Sign in</router-link>
		<router-link class="nav__link" to="/register">Sign up</router-link>
	</nav>
</template>

<script>
export default {
	name: 'McvNav',
};
</script>
<style>
@import './nav.scss';
</style>
