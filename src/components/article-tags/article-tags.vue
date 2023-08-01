<template>
	<div class="article-tags">
		<span class="article-tags__tag" v-for="(tag, index) in tagsArray" :key="index">
			{{ tag }}
		</span>
	</div>
</template>

<script>
export default {
	name: 'McvArticleTags',
	props: {
		tagsArray: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style>
@import './article-tags.scss';
</style>
