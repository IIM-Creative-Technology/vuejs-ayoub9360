<template>
  <main>
    <router-link to="/admin/add"> Ajouter un blog</router-link>
    <div>
      <ArticleItem v-for="post in posts"
                   :key="posts"
                   :title="post.name"
                   :description="post.metaDesc"
                   :id="post.id"
                   :admin="true"></ArticleItem>
    </div>
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
  }
}
</script>

<style scoped>
div {
  background: white;
  padding: 100px 20px;
  width: 80%;
  margin: auto;
  border: solid 1px #00000020;
  border-radius: 10px;
}

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