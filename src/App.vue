<template>
  <div id="app">
    <Cookies msg="Welcome to Your Cookie Clicker"/>
    <Shop v-for="product in products" :product="product" :key="product.name" />
  </div>
</template>

<script>
import Cookies from "./components/Cookies.vue";
import Shop from "./components/Shop.vue";

export default {
  name: "app",
  components: {
    Cookies,
    Shop
  },
    computed: {
      products: function(){
          return this.$store ? this.$store.state.products.products : null
      }
    }
};
</script>

<style lang="scss">

  body{
    margin: 0px;
    width: 100%;
    height: 100vh;
    overflow-x: auto;
    overflow-y: hidden;
  }

  #app {
    height: 100%;
    background: #c8eed0;
    font-family: 'Quicksand', sans-serif;
    overflow: hidden;
  }
  h1 {
    font-size: 36px;
    font-weight: bold;
    line-height: 60px;
    color: #3e606f;
  }
  .btn-main {
    border: solid 3px #3e606f;
    background: transparent;
    color: #3e606f;
    padding: 15px 30px;
    font-size: 20px;
    border-radius: 9999px;
    transition: all .2s;
  }
  .btn-main:hover {
    background: #3e606f;
    color: white;
    padding: 15px 30px;
    font-size: 20px;
    border-radius: 9999px;
    cursor: pointer;
  }
  .scale-up {
    transform: scale(1.5);
  }
</style>
<style scoped>
  footer {
    background: #F0B67F;
    padding: 10px 5px;
    height: 20px;
  }
</style>





