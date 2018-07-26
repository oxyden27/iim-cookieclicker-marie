<template>
  <div id="app">
    <Cookies msg="Welcome to Your Cookie Clicker"/>
    <Shop v-for="product in products" :product="product" :key="product.name" />
  </div>
</template>

<script>
// import components
import Cookies from "./components/Cookies.vue";
import Shop from "./components/Shop.vue";

export default {
  name: "app",
  components: {
    Cookies,
    Shop
  },
  computed: {
    // Récupérer les produits de mon store
    products: function() {
      return this.$store ? this.$store.state.products.products : null;
    }
  }
};
</script>


<style lang="scss">
body {
  margin: 0px;
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}

#app {
  height: 100%;
  background: #c8eed0;
  font-family: "Quicksand", sans-serif;
  overflow: hidden;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  line-height: 60px;
  color: #3e606f;
}
</style>
