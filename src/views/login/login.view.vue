<template>
	<div class="login-view">
		<McvHeader></McvHeader>
	</div>
</template>

<script>
import { McvHeader } from '@/components';

export default {
	name: 'MvcLogin',
	components: {
		McvHeader,
	},
};
</script>

<style>
@import './login-view.scss';
</style>
