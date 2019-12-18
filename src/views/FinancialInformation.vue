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

            <div class="sq-financial-report" v-for="report in reports">
              <img class="img-fluid" :src="report.imageurl" alt="square group">

              <div class="sq-f-report-caption text-center mt-3">
                <h4> {{report.title}}</h4>
              </div>
            </div>

          </div>
        </div>


        <!--        End Financial Report Column-->


      </div>


      <!--      Square Group Milestones-->

      <div class="sq-milestones-area my-5">
        <div class="sq-milestones">
          <div class="sq-milestone-list">
            <ul>
              <li><a href="">1998 – Production and process engineering, Diesel Systems, Germany/Italy</a></li>
              <li><a href="">2001 – Manager for production engineering for Common Rail, Czech Republic, Diesel
                Systems</a></li>
              <li><a href="">2003 – Head of department for production of Common Rail Pumps, Czech Republic</a></li>
              <li><a href="">2006 – Vice President Quality, Germany, Chassis Systems Control and Gasoline Systems</a>
              </li>
              <li><a href="">2010 – Vice President Manufacturing for ABS/ESP, Germany, Chassis Systems Control</a></li>
              <li><a href="">2013 – Senior Vice President, Product area Large Engines, Austria, Diesel Systems</a></li>
              <li><a href="">2017 – CTO & Director, Bosch Limited</a></li>
            </ul>
          </div>
          <div class="sq-milestone-image">
            <img class="img-fluid" src="../assets/images/milestone@2x.jpg" alt="square">
          </div>
        </div>
      </div>

      <!--      End Square Group Milestones-->


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
        public reports: any = [
            {
                title: 'Earning Presentations',
                imageurl: require('../assets/images/ep@2x.jpg'),
            },
            {
                title: 'Analyst presentation',
                imageurl: require('../assets/images/ap@2x.jpg'),
            },
            {
                title: 'Slavery Act statement',
                imageurl: require('../assets/images/sa@2x.jpg'),
            },
            {
                title: 'Slavery Act statement',
                imageurl: require('../assets/images/sas@2x.jpg'),
            },
            {
                title: 'Slavery Act statement',
                imageurl: require('../assets/images/sa@2x.jpg'),
            },

        ];
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


  .financial-areas {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin: 0 auto;
  }

  .sq-financial-report {
    img {
    }
  }

  .sq-f-report-caption {
    h4 {
      font-family: $font-roboto;
      text-transform: capitalize;
    }
  }

  .sq-financial-report {
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


  /*Milestones Area*/

  .sq-milestones-area {
    width: 100%;
    overflow: hidden;
  }

  .sq-milestones {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 60vh;
    @media(min-width: 1265px) {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      min-height: 60vh;
    }
  }

  .sq-milestone-list {
    background: #F4F4F4;
    padding: 3rem;
    width: 100%;
    flex-grow: 1;
    @media(min-width: 1265px) {
      flex-grow: 1;
      padding: 7rem;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        list-style: disc;
        font-family: $font-roboto;
        font-size: 20px;

        &:not(:last-child) {
          margin-bottom: 2rem;
        }

        a {
          text-decoration: none;
          color: #5F5F5F;
          font-family: inherit;
          font-weight: 500;
          display: inline-block;
        }
      }
    }
  }

  .sq-milestone-image {
    flex-shrink: 0;
    width: 100%;
    @media(min-width: 1265px) {
      width: 800px;
    }
  }


</style>