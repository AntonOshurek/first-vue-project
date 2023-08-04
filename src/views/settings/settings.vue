<template>
	<div class="settings">
		<main class="settings__main">
			<h2 class="settings__title">Your Settings</h2>

			<div class="settings__form-wrap" v-if="currentUser">
				<!-- <McvValidationErrors v-if="validationErrors" :validation-errors="validationErrors" /> -->
				<!-- <McvLoading /> -->
				<form class="settings-form" @submit.prevent="onSubmit">
					<label class="settings-form__label">
						<span class="visually-hidden">URL of profile picture</span>
						<input
							class="settings-form__input"
							type="text"
							placeholder="URL of profile picture"
							v-model="form.image"
						/>
					</label>
					<label class="settings-form__label">
						<span class="visually-hidden">Username</span>
						<input
							class="settings-form__input"
							type="text"
							placeholder="Username"
							v-model="form.username"
						/>
					</label>
					<label class="settings-form__label">
						<span class="visually-hidden">Short bio about you</span>
						<textarea
							class="settings-form__textarea settings-form__input"
							cols="30"
							rows="5"
							placeholder="Short bio about you"
							v-model="form.bio"
						></textarea>
					</label>
					<label class="settings-form__label">
						<span class="visually-hidden">Email</span>
						<input
							class="settings-form__input"
							type="email"
							placeholder="Email"
							v-model="form.email"
						/>
					</label>
					<label class="settings-form__label">
						<span class="visually-hidden">New password</span>
						<input class="settings-form__input" type="text" placeholder="New password" />
					</label>

					<button class="settings-form__submit-btn" type="submit" :disabled="isSubmitting">
						Update Settings
					</button>
				</form>

				<button class="settings-form__logout" @click="logout">Or click here to logout</button>
			</div>
		</main>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { actionTypes } from '@/store/action-types/action-types';
import { getterTypes } from '@/store/getter-types/getter-types';
// import { McvLoading, McvValidationErrors } from '@/components';
// import McvValidationErrors from '@/components/validation-errors/validation-errors';

export default {
	name: 'McvSettings',
	computed: {
		...mapGetters({
			isSubmitting: getterTypes.settingsIsSubmitting,
			validationErrors: getterTypes.settingsValidationErrors,
			currentUser: getterTypes.currentUser,
		}),
		form() {
			const { username, bio, image, email } = this.currentUser;
			return {
				username: username,
				bio: bio,
				image: image,
				email: email,
				password: '',
			};
		},
	},
	methods: {
		onSubmit() {
			console.log('submited settings');
			console.log(this.form);

			let newData = {
				username: this.form.username,
				bio: this.form.bio,
				image: this.form.image,
				email: this.form.email,
			};

			this.form.password ? (newData.password = this.form.password) : null;

			this.$store.dispatch(actionTypes.updateCurrentUser, { currenUserInput: newData });
		},
		logout() {
			console.log('logout button');
		},
	},
	conponents: {
		// McvValidationErrors,
		// McvLoading,
	},
};
</script>

<style>
@import './settings.scss';
</style>
