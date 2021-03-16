<template>
  <div class="listItems">
      <div class="listItem">
          <h2>Titre 1</h2>
          <div class="item">
              <img src="" alt="Ig Article">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum reprehenderit hic officiis assumenda quo, repellendus doloribus ullam? Qui repellat officia facere magni perspiciatis voluptatum quidem voluptatibus nisi quaerat velit?</p>
          </div>
      </div>
      <div class="listItem">
          <h2>Titre 1</h2>
          <div class="item">
              <img src="" alt="Ig Article">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum reprehenderit hic officiis assumenda quo, repellendus doloribus ullam? Qui repellat officia facere magni perspiciatis voluptatum quidem voluptatibus nisi quaerat velit?</p>
          </div>
      </div>
      <div class="listItem">
          <h2>Titre 1</h2>
          <div class="item">
              <img src="" alt="Ig Article">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum reprehenderit hic officiis assumenda quo, repellendus doloribus ullam? Qui repellat officia facere magni perspiciatis voluptatum quidem voluptatibus nisi quaerat velit?</p>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'Blog',

}
</script>


<style scoped lang="scss">
*{
  padding: 10px;
}
.item{
  display: flex;
  flex-direction: row;
}
.listItem{
  background-color: grey;
  margin: 10px 0;
  border-radius: 10px;
}
.listItems{
  width: 70%;
  margin: 0 auto;
  background-color: wheat;
  margin-top: 20px;
  border-radius: 10px;
}

</style>