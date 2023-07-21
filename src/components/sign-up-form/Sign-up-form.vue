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
export default {
	name: 'MvcSignUpForm',
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
				.dispatch('register', userData)
				.then((user) => {
					console.log(`successfully register user ${user.username}`);
					this.$router.push({ name: 'home' });
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style>
@import './sign-up-form.scss';
</style>
