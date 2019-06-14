<!-- pages/feed.vue -->

<template>
  <div>
    <PostPreview v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import Post from '~/models/Post';

@Component({
  components: {
    PostPreview: () => import('~/components/PostPreview.vue')
  },
  async asyncData() {
    let { data } = await axios.get(`https://my-api/posts`);
    return {
      posts: data
    };
  }
})
export default class FeedPage extends Vue {
  posts: Post[] = [];
}
</script>