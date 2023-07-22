<template>
	<form @submit.prevent="onSubmit" class="sign-in-form">
		<label class="sign-in-form__label">
			<span class="visually-hidden">write your email</span>
			<input class="sign-in-form__input" type="email" placeholder="Email" v-model="email" />
		</label>

		<label class="sign-in-form__label">
			<span class="visually-hidden">write your password</span>
			<input
				class="sign-in-form__input"
				type="password"
				placeholder="Password"
				v-model="password"
			/>
		</label>

		<button class="sign-in-form__submit-btn" :disabled="isSubmiting">Sign in</button>
	</form>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from '@/store/action-types/action-types';

export default {
	name: 'McvSignInForm',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	computed: mapState({
		isSubmiting: (state) => state.auth.isSubmiting,
	}),
	methods: {
		onSubmit() {
			const userData = {
				email: this.email,
				password: this.password,
			};

			this.$store
				.dispatch(actionTypes.authLogin, userData)
				.then(() => {
					this.$router.push({ name: 'home' });
				})
				.catch((err) => {
					console.error(err);
				});
		},
	},
};
</script>

<style>
@import './sign-in-form.scss';
</style>
