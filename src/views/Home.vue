<template>
  <main class="home">
    <ArticleItem
        v-for="(item, index) in posts"
        :title="item.name"
        :description="item.descArticle"
        :id="index"
        :image="item.image"
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
