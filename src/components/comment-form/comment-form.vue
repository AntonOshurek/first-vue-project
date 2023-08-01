<template>
	<div class="comment-form">
		<div class="comment-form__wrap">
			<label class="comment-form__input">
				<span class="visually-hidden">leav comment field</span>
				<textarea class="comment-form__textarea" name="" id="" cols="50" rows="10"></textarea>
			</label>
			<div class="comment-form__footer">
				<img
					class="comment-form__user-icon"
					:src="currentUser.image"
					alt=""
					width="30"
					height="30"
					v-if="currentUser"
				/>
				<button class="comment-form__submit-button" type="button">Post Comment</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';

export default {
	name: 'McvCommentForm',
	computed: {
		...mapGetters({
			currentUser: getterTypes.currentUser,
		}),
	},
};
</script>

<style>
@import './comment-form.scss';
</style>
