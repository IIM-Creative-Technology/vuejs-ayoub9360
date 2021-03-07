<template>
  <div class="login">
    <h1>{{ title }}</h1>
    <div>
      <label for="pseudo">Pseudo</label>
      <input type="text" id="pseudo" placeholder="Pseudo">
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>

</style>