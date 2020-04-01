import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// @ts-ignore
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/*",
      name: "page",
      component: () => import("./views/Page.vue")
    }
  ]
});
