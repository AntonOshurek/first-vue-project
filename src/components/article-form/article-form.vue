<template>
	<form class="article-form">
		<label class="article-form__label">
			<input class="article-form__input" type="text" placeholder="Article Title" />
		</label>
		<label class="article-form__label">
			<input class="article-form__input" type="text" placeholder="What's this article about?" />
		</label>
		<label class="article-form__label">
			<textarea
				class="article-form__textarea article-form__input"
				cols="30"
				rows="10"
				placeholder="Write your article (in markdown)"
			></textarea>
		</label>
		<label class="article-form__label">
			<input class="article-form__input" type="text" placeholder="Enter tags" />
		</label>

		<button class="article-form__submit-btn" type="button">Publish Article</button>
	</form>
</template>

<script>
export default {
	name: 'McvArticleForm',
};
</script>

<style>
@import './article-form.scss';
</style>
