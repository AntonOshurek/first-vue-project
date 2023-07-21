<template>
	<form @submit.prevent="onSubmit" class="sign-upp-form">
		<label class="sign-upp-form__label">
			<span class="visually-hidden">Write your username</span>
			<input class="sign-upp-form__input" type="text" placeholder="Username" />
		</label>

		<label class="sign-upp-form__label">
			<span class="visually-hidden">write your email</span>
			<input class="sign-upp-form__input" type="email" placeholder="Email" />
		</label>

		<label class="sign-upp-form__label">
			<span class="visually-hidden">write your password</span>
			<input class="sign-upp-form__input" type="password" placeholder="Password" />
		</label>

		<button class="sign-upp-form__submit-btn" :disabled="isSubmiting">Sign up</button>
	</form>
</template>

<script>
export default {
	name: 'MvcSignUpForm',
	computed: {
		isSubmiting() {
			return this.$store.state.auth.isSubmiting;
		},
	},
	methods: {
		onSubmit() {
			const userData = {
				email: 'ooodfsgdfgdf@dfgsd3645fg.ijho',
				password: 'sdfgdfgd546387765',
				username: 'sdfgdh6708465u!3456@#$%$^*&',
			};

			this.$store
				.dispatch('register', userData)
				.then((user) => {
					console.log(`successfully register user ${user.username}`);
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
