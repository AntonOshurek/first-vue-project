<template>
	<div class="register-view">
		<main class="register-view__main">
			<div class="register-view__titles">
				<h2 class="register-view__title">Sign up</h2>
				<router-link class="register-view__link" :to="{ name: routesNames.login }"
					>Have an account?</router-link
				>
			</div>

			<McvValidationErrors v-if="validationErrors" :validation-errors="validationErrors" />

			<McvSignUpForm></McvSignUpForm>
		</main>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import { McvSignUpForm, McvValidationErrors } from '@/components';
import { routesNames } from '@/variables/rotes';

export default {
	name: 'McvRegister',
	computed: {
		...mapGetters({
			validationErrors: getterTypes.validationErrors,
		}),
		routesNames() {
			return routesNames;
		},
	},
	components: {
		McvSignUpForm,
		McvValidationErrors,
	},
};
</script>

<style>
@import './register-view.scss';
</style>
