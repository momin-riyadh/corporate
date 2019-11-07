<template>
  <div class="navigation-area">
    <div class="container-fluid px-5-percent">
      <div class="navigation-main">

        <!--    Square logo-->
        <div class="sq-logo">
          <router-link to="/" href="">
            <img src="../assets/images/logo.svg" alt="">
          </router-link>
        </div>

        <!--    Right Navigation-->
        <div class="main-navigation">
          <ul>
            <li>
              <router-link to="/about">about</router-link>
            </li>
            <li>
              <router-link to="/business">business</router-link>
            </li>
            <li>
              <router-link to="/corporate-responsibility">responsibility</router-link>
            </li>
            <li>
              <router-link to="/stock-information">investors</router-link>
            </li>
            <li>
              <router-link to="/career">careers</router-link>
            </li>
            <li>
              <router-link to="/news">news & media</router-link>
            </li>
            <li>
              <router-link to="/contact">contact</router-link>
            </li>
          </ul>
        </div>

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
  .navigation-area{

  }

  .navigation-main {
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
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;

        &.router-link-exact-active {
          color: $brand-color;
        }

        &:not(:last-child) {
          margin-right: 15px;
        }
      }
    }

    @media(max-width: 991px) {
      display: none;
    }

  }

  /*Logo */
  .sq-logo {
    a {
      img {
        width: auto;
        height: 60px;
      }
    }
  }


</style>
