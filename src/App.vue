<template>
	<div class="container app-vue">
		<McvHeader />

		<router-view />
	</div>
</template>

<script>
import { actionTypes } from '@/store/action-types/action-types';
import { McvHeader } from './components';

export default {
	name: 'McvApp',
	components: {
		McvHeader,
	},
	mounted() {
		this.$store.dispatch(actionTypes.getCurrentUser);
	},
};
</script>

<style>
@import './app.css';
@import './app.scss';
</style>
