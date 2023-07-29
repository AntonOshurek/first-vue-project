<template>
	<ul class="pagination">
		<li class="pagination__item" v-for="page in pages" :key="page">
			{{ page }}
		</li>
	</ul>
</template>

<script>
import { arrayFromRange } from '@/helpers/utils';

export default {
	name: 'McvPagination',
	props: {
		total: {
			type: Number,
			required: true,
		},
		limit: {
			type: Number,
			required: true,
		},
		currentPage: {
			type: Number,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	computed: {
		pages() {
			const pagesCount = Math.ceil(this.total / this.limit);
			return arrayFromRange(1, pagesCount);
		},
	},
};
</script>

<style>
@import './pagination.scss';
</style>
