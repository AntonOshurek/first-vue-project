<template>
	<ul class="tag-list">
		<li class="tag-list__item" v-for="(tag, index) in tagsArray" :key="index">
			{{ tag }}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'McvTagList',
	props: {
		tagsArray: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style>
@import './tag-list.scss';
</style>
