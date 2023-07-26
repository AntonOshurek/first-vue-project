<template>
	<div class="feed">
		<h3>feed {{ apiUrl }}</h3>
	</div>
</template>

<script>
import { actionTypes } from '@/store/action-types/action-types';

export default {
	name: 'McvFeed',
	props: {
		apiUrl: {
			type: String,
			requred: true,
		},
	},
	mounted() {
		console.log('init feed');
		this.$store.dispatch(actionTypes.getFeed, { apiUrl: this.apiUrl });
	},
};
</script>

<style>
@import './feed.scss';
</style>
