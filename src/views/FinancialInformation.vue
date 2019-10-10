<template>
  <div class="financial-information-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/financial-information@2x.jpg')"
                  banner-title="Financial Information" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>


    <!--    Financial Information Report Section Start-->
    <div class="container-fluid px-5-percent">
      <div class="financial-report">
        <!--    Annual Report Year-->
        <div class="text-center text-sm-left">
          <div class="financial-report-year">
            <a href="">2019</a>
            <a href="">2018</a>
            <a href="">2017</a>
          </div>
        </div>
        <!--        End Annual Report Year-->

        <!--        Financial Report Column-->

        <div class="row">
          <div class="financial-areas align-items-center">

            <div class="sq-financial-report" v-for="v in 10">
              <img class="img-fluid" src="../assets/images/financial-report@2x.jpg" alt="square">

              <div class="sq-f-report-caption text-center mt-3">
                <h4> Financial Report 2018</h4>
              </div>
            </div>

          </div>
        </div>


        <!--        End Financial Report Column-->


      </div>
    </div>

    <!--    End Financial Information Report Section-->


    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '@/components/Navigation.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Footer from '@/components/Footer.vue';
    import Copyright from '@/components/Copyright.vue';

    @Component({
        name: 'FinancialInformation',
        components: {Copyright, Footer, CommonBanner, Navigation},
    })
    export default class FinancialInformation extends Vue {

    }
</script>

<style scoped lang="scss">
  .financial-report-year {
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


  .financial-areas{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .sq-financial-report {
    img {
      border: 1rem solid #EFEFEF;
    }
  }

  .sq-f-report-caption {
    h4 {
      font-family: $font-roboto;
      font-weight: bold;
    }
  }

  .sq-financial-report {
    width: calc(100% - 30px);
    margin: 0 15px 30px 15px;
    flex-shrink: 0;
    align-self: flex-start;
    @media (min-width: 575px) {
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