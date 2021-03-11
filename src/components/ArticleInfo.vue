<template>
  <div>
    <h1>{{ titlePage }}</h1>
    <label v-if="titleArticle" htmlFor="titleArticle">Titre de la page</label>
    <input v-if="titleArticle" type="text" id="titleArticle" name="titleArticle">
    <label htmlFor="metaTitle">Meta title</label>
    <input type="text" id="metaTitle" name="metaTitle">
    <label htmlFor="metaDescription">Meta description</label>
    <input type="text" id="metaDescription" name="metaDescription">
    <label htmlFor="image">Image</label>
    <input type="text" id="image" name="image">
    <label htmlFor="descArticle">Description</label>
    <input type="text" id="descArticle" name="descArticle">
    <button>Modifier</button>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    titlePage: String,
    titleArticle: Boolean
  },
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