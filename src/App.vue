<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

  /*#app {*/
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*  text-align: center;*/
  /*  color: #2c3e50;*/
  /*}*/

  /*#nav {*/
  /*  padding: 30px;*/

  /*  a {*/
  /*    font-weight: bold;*/
  /*    color: #2c3e50;*/

  /*    &.router-link-exact-active {*/
  /*      color: #42b983;*/
  /*    }*/
  /*  }*/
  /*}*/

  /*Importing Google Fonts*/
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css');
  @import "../node_modules/bootstrap/scss/bootstrap";
  @import "./assets/css/style";
  @import "./assets/css/element.css";
  @import "./assets/css/swiper.css";

  .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '@/components/NavigationCard.vue';
    import Footer from '@/components/FooterCard.vue';
    import Copyright from '@/components/CopyrightCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import CommonParagraph from '@/components/CommonParagraph.vue';
    import BottomBanner from '@/components/BottomBanner.vue';

    @Component({
        name: 'app',
        components: {BottomBanner, CommonParagraph, CommonBanner, Copyright, Footer, Navigation},
    })
    export default class App extends Vue {
    }
</script>