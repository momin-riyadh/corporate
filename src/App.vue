<template>
  <div id="app">
    <Navigation></Navigation>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">


  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }


  /*Importing Google Fonts*/
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css');
  @import "../node_modules/bootstrap/scss/bootstrap";
  @import "./assets/css/style";
</style>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Navigation from "@/components/Navigation.vue";

    @Component({
        name: 'app',
        components: {Navigation}
    })
    export default class App extends Vue {
    }
</script>