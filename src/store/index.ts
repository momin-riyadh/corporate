import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./store.types";
import pageData from "./modules/pageData";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: {
    pageData
  }
};

export default new Vuex.Store<RootState>(store);
