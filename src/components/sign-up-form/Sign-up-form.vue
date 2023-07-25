<template>
	<form @submit.prevent="onSubmit" class="sign-upp-form">
		<label class="sign-upp-form__label">
			<span class="visually-hidden">Write your username</span>
			<input class="sign-upp-form__input" type="text" placeholder="Username" v-model="username" />
		</label>

		<label class="sign-upp-form__label">
			<span class="visually-hidden">write your email</span>
			<input class="sign-upp-form__input" type="email" placeholder="Email" v-model="email" />
		</label>

		<label class="sign-upp-form__label">
			<span class="visually-hidden">write your password</span>
			<input
				class="sign-upp-form__input"
				type="password"
				placeholder="Password"
				v-model="password"
			/>
		</label>

		<button class="sign-upp-form__submit-btn" :disabled="isSubmiting">Sign up</button>
	</form>
</template>

<script>
import { actionTypes } from '@/store/action-types/action-types';

export default {
	name: 'McvSignUpForm',
	data() {
		return {
			email: '',
			username: '',
			password: '',
		};
	},
	computed: {
		isSubmiting() {
			return this.$store.state.auth.isSubmiting;
		},
	},
	methods: {
		onSubmit() {
			const userData = {
				email: this.email,
				password: this.password,
				username: this.username,
			};

			this.$store
				.dispatch(actionTypes.authRegister, userData)
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
@import './sign-up-form.scss';
</style>
