<template>
	<form>
		<label>
			<input type="text" placeholder="Article Title" />
		</label>
		<label>
			<input type="text" placeholder="What's this article about?" />
		</label>
		<label>
			<textarea cols="30" rows="10" placeholder="Write your article (in markdown)"></textarea>
		</label>
		<label>
			<input type="text" placeholder="Enter tags" />
		</label>

		<button type="button">Publish Article</button>
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
