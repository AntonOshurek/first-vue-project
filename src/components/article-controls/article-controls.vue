<template>
	<div class="article-controls">
		<button class="article-controls__button">Follow {{ articleData.author.username }}</button>
		<button class="article-controls__button article-controls__button--favorite">
			favorite article

			<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
				<path
					d="M480-219.5 468-231q-95.133-86.184-157.067-146.092Q249-437 214.216-480.902q-34.785-43.901-48-78.473Q153-593.947 153-628.5q0-64.505 45.498-110.002Q243.995-784 308.5-784q49.466 0 93.983 27.5t77.517 81q33.5-53.5 77.75-81T651.5-784q64.505 0 110.002 45.443Q807-693.114 807-628.692q0 34.73-12.716 68.309-12.715 33.58-47.464 76.924-34.749 43.345-96.901 104.366Q587.766-318.072 490-229l-10 9.5Z"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
export default {
	name: 'McvArticleControls',
	props: {
		articleData: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style>
@import './article-controls.scss';
</style>
