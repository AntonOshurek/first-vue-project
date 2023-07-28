<template>
	<div class="global-feed">
		<main class="global-feed__main">
			<h2 class="visually-hidden">Feed page</h2>
			<nav class="global-feed__nav">
				<a class="global-feed__nav-link" href="#">Your Feed</a>
				<a class="global-feed__nav-link" href="#">Global Feed</a>
			</nav>

			<div class="popular-tags">
				<div class="popular-tags__wrap">
					<h3 class="popular-tags__title">Popular Tags</h3>
					<ul class="popular-tags__list">
						<li class="popular-tags__item">tag</li>
						<li class="popular-tags__item">tagDescription</li>
						<li class="popular-tags__item">safsdf</li>
						<li class="popular-tags__item">sdf</li>
						<li class="popular-tags__item">sdafgdfgg</li>
					</ul>
				</div>
			</div>

			<McvFeed :apiUrl="apiUrl" />
		</main>
	</div>
</template>

<script>
import { McvFeed } from '@/components/';

export default {
	name: 'McvGlobalFeed',
	components: {
		McvFeed,
	},
	data() {
		return {
			apiUrl: '/articles',
		};
	},
};
</script>

<style>
@import './global-feed.scss';
</style>
