<template>
  <div class="login">
    <h1>{{ title }}</h1>
    <label for="pseudo">Pseudo</label>
    <input type="text" id="pseudo" placeholder="Pseudo...">

    <label for="password">Mot de passe</label>
    <input type="password" id="password" placeholder="Mot de passe...">

    <label v-if="title === 'Inscription'" for="name">Prénom</label>
    <input v-if="title === 'Inscription'" type="name" id="name" placeholder="Prénom...">

    <label v-if="title === 'Inscription'" for="surname">Nom</label>
    <input v-if="title === 'Inscription'" type="surname" id="surname" placeholder="Nom...">

    <button v-if="title === 'Connexion'">Se connecter</button>
    <button v-if="title === 'Inscription'">S'inscrire</button>


    <router-link v-if="title === 'Connexion'" class="registerButton" to="/">S'inscrire</router-link>
    <router-link v-if="title === 'Inscription'" class="loginButton" to="/">Se connecter</router-link>
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

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 80%;
  margin: auto;
  font-family: Poppins;
  border: 1px solid #00000040;
  border-radius: 20px;
}

h1 {
  color: #F8B018;
  font-size: 2.3rem;
}

label {
  margin: 20px 0 5px;
}

button {
  margin: 30px 0;
}

.loginButton {
  text-decoration: none;
  color: #F8B018;

  &:before {
    content: 'Déjà inscrit ? ';
    color: #333;
  }
}

.registerButton {
  text-decoration: none;
  color: #F8B018;

  &:before {
    content: 'Pas encore inscrit ? ';
    color: #333;
  }
}

.inscription {
  text-decoration: none;
  color: #F8B018;

  &:before {
    content: 'Pas encore inscrit ? ';
    color: #333;
  }
}
</style>