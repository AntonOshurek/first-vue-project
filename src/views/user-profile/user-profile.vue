<template>
	<div class="user-profile">
		<main class="user-profile__main">
			<h2 class="visually-hidden">Create article page</h2>

			<McvLoading v-if="isLoading" />

			<div class="user-profile__banner" v-if="userData">
				<h3 class="user-profile__username">{{ userData.username }}</h3>
				<p class="user-profile__bio">{{ userData.bio }}</p>
				<img class="user-profile__image" :src="userData.image" alt="" width="100" height="100" />

				<router-link
					class="user-profile__settings-link"
					:to="{ name: routesNames.settings }"
					v-if="isAuthor"
					>Edit Profile Settings</router-link
				>
			</div>

			<div class="user-profile__feed">list</div>
		</main>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import { actionTypes } from '@/store/action-types/action-types';
import { routesNames } from '@/variables/rotes';
import McvLoading from '@/components/loading/loading';

export default {
	name: 'McvUserProfile',
	computed: {
		...mapGetters({
			userData: getterTypes.userProfileData,
			isLoading: getterTypes.userProfileLoading,
			error: getterTypes.userProfileError,
			currentUser: getterTypes.currentUser,
		}),
		tagName() {
			return this.$route.params.slug;
		},
		routesNames() {
			return routesNames;
		},
		isAuthor() {
			if (!this.currentUser || !this.userData) {
				return false;
			}

			return this.currentUser.username === this.userData.username;
		},
	},
	mounted() {
		this.$store.dispatch(actionTypes.getUserprofile, { slug: this.tagName });
	},
	watch: {
		userData: {
			handler(data) {
				console.log(data);
			},
			immediate: true,
		},
	},
	components: {
		McvLoading,
	},
};
</script>

<style>
@import './user-profile.scss';
</style>
