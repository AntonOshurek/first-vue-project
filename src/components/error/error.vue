<template>
	<div class="error">
		<p class="error__text">
			{{ message }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'McvError',
	props: {
		message: {
			type: String,
			required: false,
			default: 'Somthing went wrong...',
		},
	},
};
</script>

<style>
@import './error.scss';
</style>
