<template>
	<div class="popular-tags">
		<div class="popular-tags__wrap">
			<h3 class="popular-tags__title">Popular Tags</h3>

			<McvLoading v-if="isLoading" />

			<McvError v-if="error" :message="error" />

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
import McvLoading from '@/components/loading/loading';
import McvError from '@/components/error/error';

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
	components: {
		McvLoading,
		McvError,
	},
};
</script>

<style>
@import './popular-tags.scss';
</style>
