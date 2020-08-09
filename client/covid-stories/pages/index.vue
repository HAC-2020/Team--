<template>
  <div>
    <h1>
      Covid Stories
    </h1>
    <post-preview
      v-for="post in posts"
      :post="post"
      :key="post.id"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostPreview from '../components/PostPreview.vue'

export default Vue.extend({
  components: {
    PostPreview
  },
  data () {
    return {
      posts: [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        }
      ]
    }
  },
  // @ts-ignore Issue with nuxt/vue-meta
  head () {
    return {
      title: 'Covid Stories',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'Home page to view stories.',
          name: 'Home page',
          content: 'Wall of posts. Each post is a covid story.'
        }
      ]
    }
  }
})
</script>

<style>
</style>
