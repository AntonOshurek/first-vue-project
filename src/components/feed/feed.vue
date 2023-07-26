<template>
	<div class="feed">
		<h3>feed {{ apiUrl }}</h3>

		<div v-if="isLoading">Loading...</div>

		<div v-if="error">Something bad happened.</div>

		<div v-if="feedData">
			<article v-for="(article, index) in feedData.articles" :key="index">
				<header>
					<p>{{ article.author.username }}</p>
					<time datetime="">
						{{ article.createdAt }}
					</time>

					<div>like {{ article.favoritesCount }}</div>
				</header>

				<h4>{{ article.title }}</h4>
				<p>{{ article.description }}</p>

				<div>
					<span v-for="(tag, index) in article.tagList" :key="index"> {{ tag }} </span>
				</div>
			</article>
		</div>
	</div>
</template>

<!-- {
	const author = {
  bio: null,
  following: false,
  image: "https://api.realworld.io/images/demo-avatar.png",
  username: "Anah Benešová",
};

const article = {
  body: "Sunt excepturi ut dolore fuga. Autem eum maiores aut nihil magnam corporis consectetur sit. Voluptate et quasi optio eos et eveniet culpa et nobis. Sint aut sint sequi possimus reiciendis nisi. Rerum et omnis et sit doloribus corporis voluptas error. Iusto molestiae tenetur necessitatibus dolorem omnis. Libero sed ut architecto. Ex itaque et modi aut voluptatem alias quae. Modi dolor cupiditate sit. Delectus consectetur nobis aliquid deserunt sint ut et voluptas. Corrupti in labore laborum quod. Ipsa laudantium deserunt. Ut atque harum inventore natus facere sed molestiae. Quia aliquid ut. Animi sunt rem et sit ullam dolorem ab consequatur modi. Cupiditate officia voluptatum. Tenetur facere eum distinctio animi qui laboriosam. Quod sed voluptatem et cumque est eos. Sint id provident suscipit harum odio et. Et fuga repellendus magnam dignissimos eius aspernatur rerum. Quo perferendis nesciunt. Dolore dolorem porro omnis voluptatibus consequuntur et expedita suscipit et. Tempora facere ipsa. Dolore accusamus soluta officiis eligendi. Eum quaerat neque eum beatae odio. Ad voluptate vel. Aut aut dolor. Cupiditate officia voluptatum. Tenetur facere eum distinctio animi qui laboriosam. Quod sed voluptatem et cumque est eos. Sint id provident suscipit harum odio et.",
  createdAt: "2022-12-09T13:46:24.264Z",
  description: "Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.",
  favorited: false,
  favoritesCount: 1467,
  slug: "Try-to-transmit-the-HTTP-card-maybe-it-will-override-the-multi-byte-hard-drive!-120863",
  tagList: ["voluptate", "rerum", "ducimus", "hic"],
  title: "Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!",
  updatedAt: "2022-12-09T13:46:24.264Z",
};
} -->

<script>
import { mapGetters } from 'vuex';
import { getterTypes } from '@/store/getter-types/getter-types';
import { actionTypes } from '@/store/action-types/action-types';

export default {
	name: 'McvFeed',
	props: {
		apiUrl: {
			type: String,
			requred: true,
		},
	},
	computed: {
		...mapGetters({
			isLoading: getterTypes.isLoading,
			feedData: getterTypes.feedData,
			error: getterTypes.error,
		}),
	},
	mounted() {
		this.$store.dispatch(actionTypes.getFeed, { apiUrl: this.apiUrl });
	},
	watch: {
		feedData: {
			handler(newValue) {
				console.log(newValue);
			},
			immediate: true,
		},
	},
};
</script>

<style>
@import './feed.scss';
</style>
