<template>
	<nav class="nav">
		<router-link class="nav__link" :to="{ name: 'home' }" active-class="nav-link--active"
			>Home</router-link
		>
		<router-link class="nav__link" :to="{ name: 'home' }" active-class="nav-link--active"
			>New Article</router-link
		>
		<router-link class="nav__link" :to="{ name: 'home' }" active-class="nav-link--active"
			>Settings</router-link
		>
		<router-link
			class="nav__link"
			:to="{ name: 'home', params: { slug: currentUser.username } }"
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
	},
};
</script>

<style>
@import './user-nav.scss';
@import '../nav.scss';
</style>
