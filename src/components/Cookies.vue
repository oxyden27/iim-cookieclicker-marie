<template>
  <div class="Cookies">
    <h1>{{ count }}</h1>


    <img ref="cookie" class="cookie" @click="increment" src="../assets/cookie.png" alt="">

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Cookies",
  data () {
      return{}
  },
  computed: {
      ...mapGetters({
       count: 'countData'
    })
  },
  methods : {
      increment () {
          this.$store.dispatch("incrementCount", (this.count +1));
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
