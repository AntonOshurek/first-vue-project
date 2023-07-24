<template>
	<div class="container">
		<McvHeader />

		<router-view />
	</div>
</template>

<script>
import { McvHeader } from './components';

export default {
	name: 'McvApp',
	components: {
		McvHeader,
	},
};
</script>

<style>
@import './app.css';
@import './app.scss';
</style>
