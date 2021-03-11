<template>
  <TheNav></TheNav>
  <router-view/>
</template>

<script>
import TheNav from "@/components/TheNav";

export default {
  components: {
    TheNav,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #F8B018;
    }
  }
}
</style>
