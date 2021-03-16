<template>
  <main>
    <LoginRegister title="Inscription"></LoginRegister>
  </main>
</template>

<script>
import LoginRegister from '@/components/LoginRegister.vue'

export default {
  name: "Register",
  components: {
    LoginRegister,
  }
}
</script>

<style scoped>
main {
  padding-top: 70px;
}
</style>