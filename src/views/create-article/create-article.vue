<template>
	<div class="create-article">
		<main class="create-article__main">
			<h2 class="visually-hidden">Create article page</h2>

			<McvArticleForm />
		</main>
	</div>
</template>

<script>
import { McvArticleForm } from '@/components';

export default {
	name: 'CreateArticle',
	components: {
		McvArticleForm,
	},
};
</script>

<style>
@import './create-article.scss';
</style>
