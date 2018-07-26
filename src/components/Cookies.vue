<template>
  <div class="Cookies">
    <h1>{{ count }} cookies</h1>
    <img ref="cookie" class="cookie" @click="increment" src="../assets/cookie.png" alt="">
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cookies",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      count: "countData"
    })
  },
  methods: {
    // Fonction incrémentation of my count
    increment() {
      this.$store.dispatch("incrementCount", this.count + 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Cookies {
  text-align: center;
  margin-top: 20px;

  h1 {
    color: #788f7d;
    line-height: inherit;
    margin-top: 0px;
  }
}

.cookie {
  max-width: 200px;
}

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
