<template>
	<header class="header">
		<router-link class="header__title" :to="{ name: 'home' }">VueApp</router-link>

		<template v-if="isLoggedIn">
			<McvUserNav />
		</template>

		<template v-if="!isLoggedIn">
			<McvGuestNav />
		</template>
	</header>
</template>

<script>
import { mapState } from 'vuex';
import McvGuestNav from '../nav/guest-nav/guest-nav';
import McvUserNav from '../nav/user-nav/user-nav';

export default {
	name: 'McvHeader',
	components: {
		McvGuestNav,
		McvUserNav,
	},
	computed: mapState({
		currentUser: (state) => state.auth.currentUser,
		isLoggedIn: (state) => state.auth.isLoggedIn,
	}),
};
</script>

<style>
@import './header.scss';
</style>
