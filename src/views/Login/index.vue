<template>
  <main>
    <LoginRegister title="Connexion"></LoginRegister>
  </main>
</template>

<script>
import LoginRegister from '@/components/LoginRegister.vue'

export default {
  name: "Login",
  components: {
    LoginRegister
  }
}
</script>

<style scoped>
main {
  padding-top: 70px;
}
</style>