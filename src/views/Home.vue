<template>
  <div class="home">
    <Login title="Connexion"></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleItem from '@/components/ArticleItem.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    ArticleItem,
    Login
  }
}
</script>
