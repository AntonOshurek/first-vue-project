<template>
	<div class="login-view">
		<!-- <McvHeader></McvHeader> -->

		<main class="login-view__main">
			<div class="login-view__titles">
				<h2 class="login-view__title">Sign in</h2>
				<router-link class="register-view__link" :to="{ name: routesNames.register }"
					>Need an account?</router-link
				>
			</div>

			<McvValidationErrors v-if="validationErrors" :validation-errors="validationErrors" />

			<McvSignInForm />
		</main>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import { McvValidationErrors, McvSignInForm } from '@/components';
import { routesNames } from '@/variables/rotes';

export default {
	name: 'MvcLogin',
	computed: {
		...mapGetters({
			validationErrors: getterTypes.validationErrors,
		}),
		routesNames() {
			return routesNames;
		},
	},
	components: {
		// McvHeader,
		McvValidationErrors,
		McvSignInForm,
	},
};
</script>

<style>
@import './login-view.scss';
</style>
