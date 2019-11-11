import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper';


Vue.use(Element);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper, /* { default global options } */);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
