<template>
  <div>
    <h1>{{ titlePage }}</h1>
    <label v-if="titlePage === 'ADD Post'" htmlFor="titleArticle">Titre de la page</label>
    <input v-if="titlePage === 'ADD Post'" type="text" id="titleArticle" name="titleArticle" v-model="post.name">
    <label htmlFor="metaTitle">Meta title</label>
    <input type="text" id="metaTitle" name="metaTitle" v-model="post.metaTitle">
    <label htmlFor="metaDescription">Meta description</label>
    <input type="text" id="metaDescription" name="metaDescription" v-model="post.metaDesc">
    <label htmlFor="image">lien de l'image</label>
    <input type="text" id="image" name="image" v-model="post.image">
    <label htmlFor="descArticle">Description</label>
    <input type="text" id="descArticle" name="descArticle" v-model="post.descArticle">
    <button @click="addPost">Ajouter</button>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    titlePage: String,
  },
  data() {
    return {
      post: {
        name: null,
        metaTitle: null,
        metaDesc: null,
        image: null,
        descArticle: null,
      }
    }
  },
  methods: {
    addPost() {
      this.$store.state.posts.push(this.post)
      this.$router.push({ name: 'Admin' });
    }
  }
}
</script>


<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
    font-size: 15px;
  }

  input, button {
    border-radius: 10px;
    padding: 5px;
  }

  label, h1 {
    padding: 20px;
    font-weight: bold;
  }
}


</style>