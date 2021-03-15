<template>
  <div>
     <img src="" alt="Img Blog">
     <h2>Titre du blog</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia dolorem labore ullam sapiente quod similique, dolorum minus laudantium? Tempore libero nulla, consectetur unde ipsam sed neque deserunt accusantium provident?</p>
  </div>
  <footer>
      <span>Publié le 22/03/21</span>
      <div>
          <span>Natacha Rodriguez</span>
          <img src="" alt="Image de profil">
      </div>
  </footer>
  
</template>

<script>
import TheNav from '../../components/TheNav.vue'

export default {
  components: { TheNav },
  name: 'Item',

}

    TheNav</script>


<style scoped lang="scss">
    *{
        padding: 10px;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        div{
            display: flex;
            flex-direction: row;
        }
    }



</style>