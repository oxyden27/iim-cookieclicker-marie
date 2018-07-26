import { shallowMount, createLocalVue } from "@vue/test-utils";
import Cookies from "@/components/Cookies.vue";
import Vuex from "vuex";
import store from "@/store";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Cookies.vue", () => {
  const wrapper = shallowMount(Cookies, { store, localVue });

  it("button click should increment the count", () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find("img");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
