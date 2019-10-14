<template>
  <div class="container-fluid px-5-percent">
    <div class="navigation-area">

      <!--    Square logo-->
      <div class="sq-logo">
        <a href="">
          <img src="../assets/images/logo.svg" alt="">
        </a>
      </div>

      <!--    Right Navigation-->
      <div class="main-navigation">
        <ul>
          <li><a href="">about</a></li>
          <li><router-link to="/business">business</router-link></li>
          <li><a href="">responsibility</a></li>
          <li><a href="">investors</a></li>
          <li><router-link to="/career">careers</router-link></li>
          <li><router-link to="/news">news & media</router-link></li>
          <li><router-link to="/contact">contact</router-link></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'Navigation',
        components: {},
    })
    export default class Navigation extends Vue {

    }
</script>

<style scoped lang="scss">

  .navigation-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }

  .main-navigation {
    ul {
      margin: 0;
      padding: 0;
      display: block;
    }

    li {
      list-style: none;
      float: left;
      text-transform: uppercase;

      &:not(:last-child) {
        margin-right: 2rem;
      }

      a {
        transition: all 0.3s ease-in-out;
        color: #292929;
        font-family: $font-roboto;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;

        &.router-link-exact-active {
          color: $brand-color;
        }

        &:not(:last-child) {
          margin-right: 15px;
        }
      }
    }

  }

  /*Logo */
  .sq-logo{
    a{
      img{
        width: auto;
        height: 60px;
      }
    }
  }



</style>