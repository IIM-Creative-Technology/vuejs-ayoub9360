<template>
  <main>
    <router-link to="/admin/add"> Ajouter un blog</router-link>
    <ArticleItem v-for="(post, index) in posts"
                 :key="index"
                 :title="post.name"
                 :description="post.descArticle"
                 :image="post.image"
                 :id="index"
                 :admin="true"
                 @deleteOnePost="deletePost(id)">
    </ArticleItem>
  </main>
</template>

<script>
import ArticleItem from "@/components/ArticleItem"

export default {
  name: "index",
  components: {
    ArticleItem,
  },
  data() {
    return {
      posts: null
    }
  },
  mounted() {
    this.posts = this.$store.state.posts
  },
  methods: {
    deletePost(data) {
      console.log(data)
      this.$store.state.posts.splice(data, 1)
      this.posts = this.$store.state.posts
    }
  }

}
</script>

<style scoped>

main {
  background: #f8f8f8;
  padding: 100px 0;
}

a {
  padding: 10px;
  background: #F8B018;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>