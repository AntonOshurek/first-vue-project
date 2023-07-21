<template>
	<header class="header">
		<h1 class="header__title">VueApp</h1>

		<McvNav></McvNav>
	</header>
</template>

<script>
import { McvNav } from '..';

export default {
	name: 'McvHeader',
	components: {
		McvNav,
	},
};
</script>

<style>
@import './header.scss';
</style>
