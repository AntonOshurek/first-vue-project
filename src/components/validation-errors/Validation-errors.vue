<template>
	<div class="validation-errors">
		<h3 class="validation-errors__title">Validation Errors</h3>
		<ul class="validation-errors__list">
			<li class="validation-errors__item" v-for="errorMessage in errorMessages" :key="errorMessage">
				{{ errorMessage }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'McvValidationErrors',
	props: {
		validationErrors: {
			type: Object,
			required: true,
		},
	},
	computed: {
		errorMessages() {
			const errorsArray = Object.keys(this.validationErrors).map((name) => {
				const message = this.validationErrors[name].join(', ');
				return `${name}: ${message}`;
			});
			return errorsArray;
		},
	},
};
</script>

<style>
@import './validation-errors.scss';
</style>
