<template>
	<div class="register-page container">
		<McvHeader></McvHeader>

		<div class="register-page__wrap">
			<div class="register-page__titles">
				<h2 class="register-page__title">Sign up</h2>
				<router-link class="register-page__link" to="/login">Have an account?</router-link>
			</div>

			<McvValidationErrors v-if="validationErrors" :validation-errors="validationErrors" />

			<McvSignUpForm></McvSignUpForm>
		</div>
	</div>
</template>

<script>
import { McvHeader, McvSignUpForm, McvValidationErrors } from '@/components';

export default {
	name: 'McvRegister',
	computed: {
		validationErrors() {
			return this.$store.state.auth.validationErrors;
		},
	},
	components: {
		McvHeader,
		McvSignUpForm,
		McvValidationErrors,
	},
};
</script>

<style>
@import './register-view.scss';
</style>
