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
		>
			New Article
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="20"
				viewBox="0 -960 960 960"
				width="20"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M242-61q-33.425 0-55.712-22.287Q164-105.575 164-139v-476q0-33.425 22.288-55.713Q208.575-693 242-693h293l-46 46H242q-12 0-22 10t-10 22v476q0 12 10 22t22 10h476q12 0 22-10t10-22v-243l46-47v290q0 33.425-22.287 55.713Q751.425-61 718-61H242Zm238-316Zm194-293 35 36-240 235v33h33l239-235 29 33-248 248h-99v-98l251-252Zm96 102-96-102 62-62q21.747-22 53.874-22Q822-754 845-731l-10.253-11.987Q858-718 858-686.837T834-632l-64 64Z"
				/>
			</svg>
		</router-link>
		<router-link
			class="nav__link"
			:to="{ name: routesNames.settings }"
			active-class="nav-link--active"
		>
			Settings
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="20"
				viewBox="0 -960 960 960"
				width="20"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="m390-100-15-117q-12-6-34.279-17.455Q318.441-245.909 306-257l-110 46-89-161 89-69q0-8.926-1.5-20.5T193-482q0-7.407 1.5-18t1.5-23l-89-67 89-157 105 43q16-12 37-23.5t37-19.5l15-115h180l14 117q18 10 36 19.5t35 22.5l109-44 89 157-94 72q2 10 2.5 20.5t.5 17.5q0 6-1 16.5t0 23.5l90 68-89 161-112-47q-16 12-32.5 22T585-219l-15 119H390Zm83-263q49.6 0 84.3-34.7Q592-432.4 592-482q0-49.6-34.7-84.3Q522.6-601 473-601q-48 0-83.5 34.7T354-482q0 49.6 35.5 84.3Q425-363 473-363Zm-.118-58Q448-421 430-439.118q-18-18.117-18-43Q412-507 430.118-525q18.117-18 43-18Q498-543 516-524.882q18 18.117 18 43Q534-457 515.882-439q-18.117 18-43 18ZM480-481Zm-41 323h79.849L532-266q29-8 54.413-22.585Q611.827-303.17 639-329l96 42 42-66-85-66q5-18 7-32.73 2-14.73 2-30 0-14.27-1.5-26.27t-5.5-34l86-67-40-66-100 41q-18-20-50.393-38.795T532-697l-11-107h-84l-9 105q-32 7-59 22.5T316-634l-95-41-42 66 82 66q-4 18-6 34t-2 27.424q0 10.576 2 26.076t5 36.5l-81 66 42 66 95-40q28 25 54.5 39.5T427-265l12 107Z"
				/>
			</svg>
		</router-link>
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
