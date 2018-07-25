import Vue from "vue";
import Vuex from "vuex";
import products from '@/assets/objects/products'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    products: products
  },
  mutations: {
    "SET_COUNT": (state, newTotal) => {
      state.count = newTotal;
    }
  },
  actions: {
    incrementCount({ commit }, total){
      commit("SET_COUNT", total);
    }
  },
  getters: {
    countData(state) {
      return state.count;
    }
  }
});
