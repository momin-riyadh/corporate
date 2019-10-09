<template>
  <div class="annual-report-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/annual-report@2x.jpg')"
                  banner-title="annual report"
                  banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"

    />


    <!--      Annual Report Section/Column Start-->
    <div class="container-fluid px-5-percent">
      <div class="annual-report">

        <!--    Annual Report Year-->
        <div class="text-center text-sm-left">
          <div class="annual-report-year">
            <a href="">2019</a>
            <a href="">2018</a>
            <a href="">2017</a>
          </div>
        </div>
        <!--        End Annual Report Year-->


        <div class="row">
          <div class="custom-areas align-items-center">
            <div class="s-a-report" v-for="v in 10">
              <img class="img-fluid" src="../assets/images/report/ar-cover@2x.jpg" alt="square">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--      End-->
    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import Navigation from '../components/Navigation.vue';
    import CommonBanner from '../components/CommonBanner.vue';
    import Footer from '@/components/Footer.vue';
    import Copyright from '@/components/Copyright.vue';

    @Component({
        name: 'AnnualReport',
        components: {
            Copyright,
            Footer,
            CommonBanner,
            Navigation,

        },
    })

    export default class AnnualReport extends Vue {

    }
</script>

<style scoped lang="scss">
  .annual-report-year {
    background: #EFEFEF;
    display: inline-block;
    margin: 50px 0 30px 0;

    a {
      transition: all 0.3s ease-in-out;
      text-decoration: none;
      display: inline-block;
      color: #313131;
      font-size: 1.2rem;
      font-family: $font-helvetica-bold;
      padding: .8rem 2rem;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid $brand-color;
        background: darken(#efefef, 10%);
      }
    }
  }


  .custom-areas {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .s-a-report {
    border: 1rem solid #EFEFEF;
    width: calc(100% - 30px);
    margin: 0 0 30px 0;
    flex-shrink: 0;
    align-self: flex-start;
    @media (min-width: 767px) {
      width: calc(50% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 991px) {
      width: calc(25% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 1440px) {
      width: calc(20% - 30px);
      margin: 0 15px 30px;
    }
  }
</style>