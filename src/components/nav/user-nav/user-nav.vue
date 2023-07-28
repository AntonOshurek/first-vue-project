<template>
	<nav class="nav">
		<router-link
			class="nav__link"
			:to="{ name: routesNames.globalFeed }"
			active-class="nav-link--active"
			>Home</router-link
		>
		<router-link
			class="nav__link"
			:to="{ name: routesNames.createArticle }"
			active-class="nav-link--active"
			>New Article</router-link
		>
		<router-link
			class="nav__link"
			:to="{ name: routesNames.settings }"
			active-class="nav-link--active"
			>Settings</router-link
		>
		<router-link
			class="nav__link"
			:to="{ name: routesNames.userProfile, params: { slug: currentUser.username } }"
			active-class="nav-link--active"
		>
			<img class="nav__user-img" :src="currentUser.image" alt="" />
			{{ currentUser.username }}
		</router-link>
	</nav>
</template>

<script>
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import { routesNames } from '@/variables/rotes';

export default {
	name: 'McvUserNav',
	// computed: mapState({
	// 	currentUser: (state) => state.auth.currentUser,
	// }),
	computed: {
		// currentUser() {
		// 	return this.$store.getters[getterTypes.currentUser];
		// },
		...mapGetters({
			currentUser: getterTypes.currentUser,
		}),
		routesNames() {
			return routesNames;
		},
	},
};
</script>

<style>
@import './user-nav.scss';
@import '../nav.scss';
</style>
