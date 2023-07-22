<template>
	<div class="login-view">
		<McvHeader></McvHeader>

		<main class="login-view__main">
			<div class="login-view__titles">
				<h2 class="login-view__title">Sign in</h2>
				<router-link class="register-view__link" to="/register">don't have an account?</router-link>
			</div>

			<McvValidationErrors v-if="validationErrors" :validation-errors="validationErrors" />

			<McvSignInForm />
		</main>
	</div>
</template>

<script>
import { McvHeader, McvValidationErrors, McvSignInForm } from '@/components';

export default {
	name: 'MvcLogin',
	computed: {
		validationErrors() {
			return this.$store.state.auth.validationErrors;
		},
	},
	components: {
		McvHeader,
		McvValidationErrors,
		McvSignInForm,
	},
};
</script>

<style>
@import './login-view.scss';
</style>
