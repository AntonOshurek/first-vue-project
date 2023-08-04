<template>
	<div class="settings">
		<main class="settings__main">
			<h2 class="settings__title">Your Settings</h2>

			<div class="settings__form-wrap">
				<form class="settings-form">
					<label class="settings-form__label">
						<span class="visually-hidden">URL of profile picture</span>
						<input class="settings-form__input" type="text" placeholder="URL of profile picture" />
					</label>
					<label class="settings-form__label">
						<span class="visually-hidden">Username</span>
						<input class="settings-form__input" type="text" placeholder="Username" />
					</label>
					<label class="settings-form__label">
						<span class="visually-hidden">Short bio about you</span>
						<textarea
							class="settings-form__textarea settings-form__input"
							cols="30"
							rows="5"
							placeholder="Short bio about you"
						></textarea>
					</label>
					<label class="settings-form__label">
						<span class="visually-hidden">Email</span>
						<input class="settings-form__input" type="text" placeholder="Email" />
					</label>
					<label class="settings-form__label">
						<span class="visually-hidden">New password</span>
						<input class="settings-form__input" type="text" placeholder="New password" />
					</label>

					<button class="settings-form__submit-btn" type="submit">Update Settings</button>
				</form>

				<button class="settings-form__logout">Or click here to logout</button>
			</div>
		</main>
	</div>
</template>

<script>
export default {
	name: 'McvSettings',
};
</script>

<style>
@import './settings.scss';
</style>
