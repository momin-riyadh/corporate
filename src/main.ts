import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Element from "element-ui";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { Route } from "vue-router";
import { FETCH_PAGE_DATA } from "./store/actions.names";

Vue.use(Element);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper /* { default global options } */);

router.beforeEach((to: Route, from: Route, next: any) => {
  store.dispatch(FETCH_PAGE_DATA, to).then(() => {
    next();
  });
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
