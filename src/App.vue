<template>
  <div id="app">
    <Cookies msg="Welcome to Your Cookie Clicker"/>

    <img class="cookie_img" src="./assets/cookie.png">
  </div>
</template>

<script>
import Cookies from "./components/Cookies.vue";

export default {
  name: "app",
  components: {
    Cookies
  }
};
</script>

<style lang="scss">

.cookie_img{
  width: 200px;
  max-width: 200px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>





