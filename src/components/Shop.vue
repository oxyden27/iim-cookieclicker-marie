<template>
    <div class="product" @click="buy">
        <div class="desc">
            <h4>{{ product.name }}</h4>
            <small>+{{ product.cookiePerSeconds.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) }} cookies/s</small>
            <div class="price">
                <img class="icon" src="../assets/cookie.png" alt="">
                <div :class="{'text-green': canBuy === true, 'text-red': canBuy === false }">{{ product.price.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) }}</div>
            </div>
        </div>
        <div class="count" ref="count">
            <span>{{ product.purchased }}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {};
  },
  props: ["product"],
  computed: {
      // Fonction boolean if can buy or not
    canBuy: function() {
      return this.$store.state.count >= this.product.price;
    }
  },
  mounted() {
    this.$store.dispatch("farmProducts", this.product.name);
  },
  methods: {
    buy() {
        // Fonction buy with condition if i can buy
      if (this.canBuy) {
        this.$store.commit("BUY_PRODUCTS", { productId: this.product.id });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product {
  border: 1px solid black;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 20px;
  width: 47% !important;
  display: inline-flex;
  padding: 10px;
}

.price {
  padding-top: 10px;
  display: flex;
  align-items: center;
  font-family: "Quicksand", sans-serif;
}
.desc {
  flex: 1;
  cursor: pointer;
  h4 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.count {
  font-size: 30px;
  color: #777;
}
.icon {
  width: 35px;
  height: 35px;
  margin-right: 5px;
}
.text-green {
  color: green;
  font-weight: bold;
}
.text-red {
  color: red;
}
small {
  color: #777;
  font-weight: normal;
  font-size: 15px;
}
</style>
