<template>
	<div class="register-page container">
		<MvcHeader></MvcHeader>

		<div class="register-page__wrap">
			<div class="register-page__titles">
				<h2 class="register-page__title">Sign up</h2>
				<router-link class="register-page__link" to="/login">Have an account?</router-link>
			</div>

			<MvcSignUpForm></MvcSignUpForm>
		</div>
	</div>
</template>

<script>
import { MvcHeader, MvcSignUpForm } from '@/components';

export default {
	name: 'McvRegister',
	components: {
		MvcHeader,
		MvcSignUpForm,
	},
};
</script>

<style>
@import './register-view.scss';
</style>
