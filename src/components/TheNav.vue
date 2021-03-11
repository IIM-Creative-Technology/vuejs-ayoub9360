<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/admin">Admin</router-link>
      </li>
      <li>
        <router-link to="/login"> Connexion</router-link>
      </li>
      <li>
        <router-link to="/register">Inscription</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheNav',

}
</script>


<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div {
  border-radius: 10px;
}

a {
  text-decoration: none;
  color: white;
}

ul {
  background: linear-gradient(90deg, rgba(250, 150, 26, 1) 0%, rgba(255, 193, 12, 1) 100%);
  display: flex;
  flex-direction: row;
  color: white;
  list-style: none;

  li {
    padding: 15px;
    font-weight: bold;
  }
}

</style>