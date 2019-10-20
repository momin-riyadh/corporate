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
          <div class="mb-4 col-md-3" v-for="v in 6">
            <div class="sq-business-logo">
              <img src="../assets/images/brands/square-hospital.svg" alt="square">
              <div class="sq-business-caption text-center">

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