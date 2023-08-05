<template>
	<section class="feed">
		<h3 class="visually-hidden">feed overview</h3>

		<McvLoading v-if="isLoading" />

		<McvError v-if="error" :message="error" />

		<div v-if="feedData && feedData.articlesCount === 0">No articles are here... yet.</div>

		<McvFeedList v-if="feedData" :feed-data="feedData" />

		<McvPagination
			v-if="feedData"
			:total="feedData.articlesCount"
			:limit="limit"
			:current-page="currentPage"
			:url="baseUrl"
		/>
	</section>
</template>

<!-- https://demo.realworld.io/#/ -->

<script>
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import { actionTypes } from '@/store/action-types/action-types';
import { routesNames } from '@/variables/rotes';
import { pageItemsLimit } from '@/variables/variables';
import McvPagination from '@/components/pagination/pagination';
import queryString from 'query-string';
import McvLoading from '@/components/loading/loading';
import McvError from '@/components/error/error';
import McvFeedList from '@/components/feed-list/feed-list';

export default {
	name: 'McvFeed',
	props: {
		apiUrl: {
			type: String,
			requred: true,
		},
	},
	computed: {
		...mapGetters({
			isLoading: getterTypes.isLoading,
			feedData: getterTypes.feedData,
			error: getterTypes.error,
		}),
		routesNames() {
			return routesNames;
		},
		currentPage() {
			return Number(this.$route.query.page || '1');
		},
		baseUrl() {
			return this.$route.path;
		},
		offset() {
			return this.currentPage * this.limit - this.limit;
		},
	},
	data() {
		return {
			limit: pageItemsLimit,
		};
	},
	components: {
		McvPagination,
		McvLoading,
		McvError,
		McvFeedList,
	},
	mounted() {
		this.fetchFeed();
	},
	watch: {
		currentPage: {
			handler() {
				this.fetchFeed();
			},
			immediate: true,
		},
	},
	methods: {
		fetchFeed() {
			const parsedUrl = queryString.parseUrl(this.apiUrl);

			const stringifiedParams = queryString.stringify({
				limit: this.limit,
				offset: this.offset,
				...parsedUrl.query,
			});
			const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

			this.$store.dispatch(actionTypes.getFeed, { apiUrl: apiUrlWithParams });
		},
	},
};
</script>

<style>
@import './feed.scss';
</style>
