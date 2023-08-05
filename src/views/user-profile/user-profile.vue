<template>
	<div class="user-profile">
		<main class="user-profile__main">
			<h2 class="visually-hidden">Create article page</h2>

			<McvLoading v-if="isLoading" />

			<section class="user-profile__banner" v-if="userData">
				<h3 class="user-profile__username">{{ userData.username }}</h3>
				<p class="user-profile__bio">{{ userData.bio }}</p>
				<img class="user-profile__image" :src="userData.image" alt="" width="100" height="100" />

				<router-link
					class="user-profile__settings-link"
					:to="{ name: routesNames.settings }"
					v-if="isCurrentUserProfile"
					>Edit Profile Settings</router-link
				>

				<button class="user-profile__settings-link" v-if="!isCurrentUserProfile">
					{{ userData.following ? `Unfolow ${userData.username}` : `Follow ${userData.username}` }}
				</button>
			</section>

			<section class="user-profile__feed">
				<h3 class="visually-hidden">User feed page</h3>

				<nav class="global-feed__nav">
					<h4 class="visually-hidden">User feed navigation</h4>

					<router-link
						class="global-feed__nav-link"
						:to="{ name: routesNames.userProfile }"
						active-class="global-feed__nav-link--active"
						>{{ isCurrentUserProfile ? 'My Aricles' : 'User Articles' }}</router-link
					>

					<router-link
						class="global-feed__nav-link"
						:to="{ name: routesNames.userProfileFavorite }"
						active-class="global-feed__nav-link--active"
						>Favorited Articles</router-link
					>
				</nav>

				<McvFeed :apiUrl="apiUrl" />
			</section>
		</main>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import { actionTypes } from '@/store/action-types/action-types';
import { routesNames } from '@/variables/rotes';
import McvLoading from '@/components/loading/loading';
import McvFeed from '@/components/feed/feed';

export default {
	name: 'McvUserProfile',
	computed: {
		...mapGetters({
			userData: getterTypes.userProfileData,
			isLoading: getterTypes.userProfileLoading,
			error: getterTypes.userProfileError,
			currentUser: getterTypes.currentUser,
		}),
		username() {
			return this.$route.params.slug;
		},
		routesNames() {
			return routesNames;
		},
		isCurrentUserProfile() {
			if (!this.currentUser || !this.userData) {
				return false;
			}

			return this.currentUser.username === this.userData.username;
		},
		apiUrl() {
			// favorited

			return `/articles?author=${this.currentUser.username}`;
		},
	},
	mounted() {
		this.$store.dispatch(actionTypes.getUserprofile, { slug: this.username });
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
		McvFeed,
	},
};
</script>

<style>
@import './user-profile.scss';
</style>
