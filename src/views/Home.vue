<template>
  <main class="home">
    <ArticleItem
        v-for="item in posts"
        :title="item.name"
        :description="item.descArticle"
    ></ArticleItem>
  </main>
</template>

<script>
import ArticleItem from "@/components/ArticleItem"

export default {
  name: 'Home',
  components: {
    ArticleItem
  },
  data() {
    return {
      posts: null
    }
  },
  mounted() {
    this.posts = this.$store.state.posts
  }
}
</script>
