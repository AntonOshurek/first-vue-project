<template>
	<div class="article-controls">
		<button class="article-controls__button">
			Edit Article
			<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
				<path
					d="M207-197h50l324-325-50-50-324 325v50Zm587-382L589-785l21-22q42-43 99-43.5t99 41.5l32 33q35 33 31.5 78T837-622l-43 43Zm-58 57L303-88H97v-205l434-433 205 204Zm-178-24-27-26 50 50-23-24Z"
				/>
			</svg>
		</button>
		<button class="article-controls__button article-controls__button--delete">
			Delete Article
			<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
				<path
					d="M299-98q-53.7 0-90.85-37.15Q171-172.3 171-226v-461h-71v-128h260v-74h239v74h261v128h-71v460.566q0 54.559-37.088 91.496Q714.825-98 661-98H299Zm362-589H299v461h362v-461ZM358-287h105v-339H358v339Zm140 0h105v-339H498v339ZM299-687v461-461Z"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
export default {
	name: 'McvUserArticleControls',
	props: {
		articleData: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style>
@import '../article-controls.scss';
</style>
