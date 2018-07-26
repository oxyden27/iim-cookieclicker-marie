import Vue from "vue";
import Vuex from "vuex";
import products from "@/assets/objects/products";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    products: products
  },
  mutations: {
    SET_COUNT: (state, newTotal) => {
      state.count = newTotal;
    },
    BUY_PRODUCTS: (state, { productId }) => {
      //Loop to know which product product is concerned
      state.products.products = state.products.products.map(product => {
        if (product.id === productId) {
          // Get one
          product.purchased++;
          //Subtract the number of cookies purchased from the total number of cookies
          state.count -= product.price;
          // Attribution new price after buy
          if (product.name === "Cursor") {
            product.price = 1.22 * product.price;
            state.cursor = state.cursor + 1;
          }
          if (product.name === "Grandma") {
            product.price = 1.62 * product.price;
            state.grandma = state.grandma + 1;
          }
          if (product.name === "Farmer") {
            product.price = 2 * product.price;
            state.farmer = state.farmer + 1;
          }
          if (product.name === "Tree") {
            product.price = 2 * product.price;
            state.Tree = state.Tree + 1;
          }
        }

        return product;
      });
    },

    ADD_COOKIES: (state, { cookies }) => {
      // add cookies from the total number of cookies
      state.count = state.count + cookies;
    },

    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem("store")) {
        // Replace the state object with the stored item
        store.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    }
  },
  actions: {
    incrementCount({ commit }, total) {
      commit("SET_COUNT", total);
    },
    farmProducts({ commit, state }, productId) {
      this.intervalid = setInterval(function() {
        var cookieCount = 0;
        for (let product of state.products.products) {
          if (product.name === productId) {
            cookieCount = product.cookiePerSeconds * product.purchased;
          }
        }
        commit("ADD_COOKIES", { cookies: cookieCount });
      }, 10000);
    }
  },
  getters: {
    countData(state) {
      return state.count;
    }
  }
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
