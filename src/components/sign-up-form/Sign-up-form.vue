<template>
	<form class="sign-upp-form">
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

		<button class="sign-upp-form__submit-btn" type="button">Sign up</button>
	</form>
</template>

<script>
export default {
	name: 'MvcSignUpForm',
};
</script>

<style>
@import './sign-up-form.scss';
</style>
