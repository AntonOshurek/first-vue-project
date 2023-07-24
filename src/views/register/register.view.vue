<template>
	<div class="register-view">
		<!-- <McvHeader></McvHeader> -->

		<main class="register-view__main">
			<div class="register-view__titles">
				<h2 class="register-view__title">Sign up</h2>
				<router-link class="register-view__link" to="/login">Have an account?</router-link>
			</div>

			<McvValidationErrors v-if="validationErrors" :validation-errors="validationErrors" />

			<McvSignUpForm></McvSignUpForm>
		</main>
	</div>
</template>

<script>
import { McvSignUpForm, McvValidationErrors } from '@/components';

export default {
	name: 'McvRegister',
	computed: {
		validationErrors() {
			return this.$store.state.auth.validationErrors;
		},
	},
	components: {
		// McvHeader,
		McvSignUpForm,
		McvValidationErrors,
	},
};
</script>

<style>
@import './register-view.scss';
</style>
