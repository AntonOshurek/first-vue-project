<template>
	<form class="article-form" @submit.prevent="onSubmit">
		<label class="article-form__label">
			<span class="visually-hidden">Article Title</span>
			<input class="article-form__input" type="text" placeholder="Article Title" v-model="title" />
		</label>
		<label class="article-form__label">
			<span class="visually-hidden">What's this article about?</span>
			<input
				class="article-form__input"
				type="text"
				placeholder="What's this article about?"
				v-model="description"
			/>
		</label>
		<label class="article-form__label">
			<span class="visually-hidden">Write your article (in markdown)</span>
			<textarea
				class="article-form__textarea article-form__input"
				cols="30"
				rows="10"
				placeholder="Write your article (in markdown)"
				v-model="body"
			></textarea>
		</label>
		<label class="article-form__label">
			<span class="visually-hidden">Enter tags</span>
			<input class="article-form__input" type="text" placeholder="Enter tags" v-model="tagList" />
		</label>

		<button class="article-form__submit-btn" type="submit" :disabled="isSubmiting">
			Publish Article
		</button>
	</form>
</template>

<script>
export default {
	name: 'McvArticleForm',
	props: {
		initialValue: {
			type: Object,
			required: true,
		},
		isSubmiting: {
			type: Boolean,
			required: true,
		},
	},
	data() {
		return {
			title: '',
			description: '',
			body: '',
			tagList: '',
		};
	},
	methods: {
		onSubmit() {
			const formData = {
				title: this.title,
				description: this.description,
				body: this.body,
				tagList: this.tagList.split(' '),
			};
			this.$emit('articleSubmit', formData);
		},
	},
};
</script>

<style>
@import './article-form.scss';
</style>
