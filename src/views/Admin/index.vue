<template>
  <main>
    <div>
      <ArticleItem title="Test" description="lorem ipsum"></ArticleItem>
    </div>
  </main>
</template>

<script>
import ArticleItem from "@/components/ArticleItem"

export default {
  name: "index",
  components: {
    ArticleItem,
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
</style>