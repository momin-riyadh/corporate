<template>
  <div class="about-layout-area">
    <Navigation/>
    <CommonBanner v-bind:ImageUrl="require('../../assets/images/business@2x.jpg')" BannerTitle="Who We Are"
                  BannerSubtitle="SQUARE today symbolizes a name – a state of mind. But its journey to the
growth and prosperity has been no bed of roses."/>

    <div class="management-bg container-fluid px-5-percent mb-5">
      <div class="sq-about-content-area">
        <div class="sq-a-left-sidebar">
          <ul>
            <li>
              <router-link to="/about-details">Who We are</router-link>
            </li>
            <li>
              <router-link to="/philosophy">Mission, Vision & Values</router-link>
            </li>
            <li>
              <router-link to="/achievement">Achievements</router-link>
            </li>
            <li>
              <router-link to="/management">Management</router-link>
            </li>
          </ul>
        </div>

        <div class="sq-a-page-content">
          <router-view/>
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
  .management-bg{
    padding-top: 5rem;
    margin-top: -5rem;
    background: url("../../assets/images/management_bg.png") repeat scroll 0 0;
  }
  .sq-about-content-area {
    display: flex;
    flex-direction: column;
    @media(min-width: 965px) {
      display: flex;
      flex-direction: row;
    }
  }

  .sq-a-left-sidebar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    @media(min-width: 965px) {
      width: 15vw;
      max-width: 450px;
      flex-shrink: 0;
    }

    ul {
      list-style: none;
      @media(min-width: 965px) {
        margin: 0;
        padding: 0;
        display: block;
        list-style: none;
      }

      li {
        width: auto;
        float: left;
        @media(min-width: 965px) {
          margin-bottom: 1.2rem;
          width: 100%;
        }

        a {
          transition: all 0.3s ease-in-out;
          font-family: $font-helvetica-bold;
          color: #333333;
          text-decoration: none;
          font-size: .9rem;
          line-height: .9rem;
          width: 100%;
          display: block;
          padding: 1.5rem 1rem;
          border-left: 4px solid transparent;
          @media all and (min-width: 1905px) {
            font-size: 1.3rem;
            line-height: 1.3rem;
          }

          &:hover {
            background: #F0F0F0;
            border-bottom: 4px solid $brand-color;
            @media (min-width: 965px) {
              border-left: 4px solid $brand-color;
              border-bottom: 0;
            }
          }

          &.router-link-exact-active {
            background: #F0F0F0;
            border-bottom: 4px solid $brand-color;
            @media (min-width: 965px) {
              border-left: 4px solid $brand-color;
              border-bottom: 0;
            }
          }
        }
      }
    }
  }
.sq-a-page-content{
  overflow: hidden;
}

</style>