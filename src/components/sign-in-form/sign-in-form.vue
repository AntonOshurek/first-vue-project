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
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import { actionTypes } from '@/store/action-types/action-types';
import { routesNames } from '@/variables/rotes';

export default {
	name: 'McvSignInForm',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	computed: {
		...mapGetters({
			isSubmiting: getterTypes.isSubmiting,
		}),
	},
	methods: {
		onSubmit() {
			const userData = {
				email: this.email,
				password: this.password,
			};

			this.$store
				.dispatch(actionTypes.authLogin, userData)
				.then(() => {
					this.$router.push({ name: routesNames.globalFeed });
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
