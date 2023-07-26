<template>
	<header class="header">
		<h1>
			<router-link class="header__title" :to="{ name: routesNames.globalFeed }">VueApp</router-link>
		</h1>

		<template v-if="isLoggedIn">
			<McvUserNav />
		</template>

		<template v-if="isAnonymous">
			<McvGuestNav />
		</template>
	</header>
</template>

<script>
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import McvGuestNav from '../nav/guest-nav/guest-nav';
import McvUserNav from '../nav/user-nav/user-nav';
import { routesNames } from '@/variables/rotes';

export default {
	name: 'McvHeader',
	components: {
		McvGuestNav,
		McvUserNav,
	},
	// computed: mapState({
	// 	isLoggedIn: (state) => state.auth.isLoggedIn,
	// }),
	// computed: {
	// 	isLoggedIn() {
	// 		return this.$store.getters[getterTypes.isLoggedIn];
	// 	},
	// 	isAnonymous() {
	// 		return this.$store.getters[getterTypes.isAnonymous];
	// 	},
	// },
	computed: {
		...mapGetters({
			isLoggedIn: getterTypes.isLoggedIn,
			isAnonymous: getterTypes.isAnonymous,
		}),
		routesNames() {
			return routesNames;
		},
	},
};
</script>

<style>
@import './header.scss';
</style>
