<template>
	<header class="header">
		<router-link class="header__title" :to="{ name: 'home' }">VueApp</router-link>

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
	},
};
</script>

<style>
@import './header.scss';
</style>
