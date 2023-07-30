<template>
	<div class="popular-tags">
		<div class="popular-tags__wrap">
			<h3 class="popular-tags__title">Popular Tags</h3>

			<div v-if="isLoading">Loading...</div>

			<div v-if="error">Somthing bad happened</div>

			<ul class="popular-tags__list" v-if="popularTags">
				<li class="popular-tags__item" v-for="(tag, index) in popularTags" :key="index">
					<router-link
						class="popular-tags__link"
						:to="{ name: routesNames.tag, params: { slug: tag } }"
					>
						{{ tag }}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import { routesNames } from '@/variables/rotes';
import { actionTypes } from '@/store/action-types/action-types';

export default {
	name: 'McvPopularTags',
	computed: {
		...mapGetters({
			isLoading: getterTypes.popularTagsLoading,
			popularTags: getterTypes.popularTagsData,
			error: getterTypes.popularTagsError,
		}),
		routesNames() {
			return routesNames;
		},
	},
	mounted() {
		this.fetchPopularTags();
	},
	methods: {
		fetchPopularTags() {
			this.$store.dispatch(actionTypes.getPopularTags);
		},
	},
};
</script>

<style>
@import './popular-tags.scss';
</style>
