<template>
  <div class="about-layout-area">
    <Navigation/>
    <CommonBanner v-bind:ImageUrl="require('../../assets/images/business@2x.jpg')" BannerTitle="Who We Are"
                  BannerSubtitle="SQUARE today symbolizes a name – a state of mind. But its journey to the
growth and prosperity has been no bed of roses."/>

    <div class="container-fluid px-5-percent mb-5">
      <div class="sq-about-content-area">
        <div class="sq-a-left-sidebar">
          <ul>
            <li>
              <router-link to="/about-details">Who We are</router-link>
            </li>
            <li>
              <router-link to="/philosophy">Our Philosophy</router-link>
            </li>
            <li><a href="">Achievements</a></li>
            <li><a href="">Management</a></li>
          </ul>
        </div>


        <div class="sq-a-page-content">
          <router-view></router-view>
        </div>


      </div>
    </div>


    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '../../components/Navigation.vue';
    import CommonBanner from '../../components/CommonBanner.vue';
    import Footer from '../../components/Footer.vue';
    import Copyright from '../../components/Copyright.vue';

    @Component({
        name: 'AboutLayout',
        components: {
            Copyright,
            Footer,
            CommonBanner,
            Navigation,
        },
    })

    export default class AboutLayout extends Vue {

    }
</script>

<style scoped lang="scss">
  .sq-about-content-area {
    display: flex;
  }

  .sq-a-left-sidebar {
    width: 15vw;
    max-width: 450px;
    flex-shrink: 0;

    ul {
      margin: 0;
      padding: 0;
      display: block;
      list-style: none;

      li {
        width: 100%;
        margin-bottom: 1.2rem;

        a {
          transition: all 0.3s ease-in-out;
          font-family: $font-helvetica-bold;
          color: #333333;
          text-decoration: none;
          font-size: 1.3rem;
          line-height: 1.3rem;
          width: 100%;
          display: block;
          padding: 1.5rem 1rem;
          border-left: 4px solid transparent;

          &:hover {
            background: #F0F0F0;
            border-left: 4px solid $brand-color;
          }

          &.router-link-exact-active {
            background: #F0F0F0;
            border-left: 4px solid $brand-color;
          }
        }
      }
    }
  }

</style>