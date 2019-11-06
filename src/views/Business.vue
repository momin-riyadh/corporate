<template>
  <div class="sq-business-area">
    <!--    Importing Components-->
    <Navigation/>
    <CommonBanner v-bind:ImageUrl="require('../assets/images/business@2x.jpg')" BannerTitle="Our Business"
                  BannerSubtitle="We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence and honesty. Maybe it's our family orientation"/>
    <!--  End  Importing Components-->

    <div class="container-fluid px-5-percent my-5">
      <div class="sq-business">
        <div class="row">
          <div class="sq-business-industries">
            <div class="sq-business-logo-area" v-for="v in 6">
              <div class="sq-business-logo">
                <img src="../assets/images/brands/square-hospital.svg" alt="square">
              </div>
              <div class="sq-business-caption text-center">
                Square Pharmaceuticals Limited
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Importing Components-->
    <Footer/>
    <Copyright/>
    <!--  End Importing Components-->

  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import Navigation from '@/components/Navigation.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Footer from '@/components/Footer.vue';
    import Copyright from '@/components/Copyright.vue';

    @Component({
        name: 'Business',
        components: {
            Copyright,
            Footer,
            CommonBanner,
            Navigation,

        },

    })
    export default class Business extends Vue {

    }
</script>

<style scoped lang="scss">

  .sq-business-industries{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .sq-business-logo-area{
    flex-grow: 1;
    width: 100%;
    max-width: 400px;
    min-width: 350px;
  }
  .sq-business-logo-area{
    width: calc(100% - 30px);
    margin: 0 15px 30px 15px;
    flex-shrink: 0;
    align-self: flex-start;
    @media (min-width: 600px) {
      width: calc(50% - 30px);
      margin: 0 15px 30px;
    }

    @media (min-width: 960px) {
      width: calc(33.3333% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 1265px) {
      width: calc(25% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 1905px) {
      width: calc(20% - 30px);
      margin: 0 15px 30px;
    }
  }

  .sq-business-caption {
    background: #292929;
    height: 80px;
    color: $white-color;
    font-family: $font-roboto;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sq-business-logo {
    width: auto;
    height: 340px;
    background: #FAFAFA;
    text-align: center;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .sq-business-logo img {
    width: 300px;
    height: 80px;
    object-fit: cover;
    -o-object-fit: cover;
    object-position: center;
    -o-object-position: center;
  }


</style>