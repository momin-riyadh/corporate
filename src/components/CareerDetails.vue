<template>
  <div class="sq-career-details-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/career-ref.jpg')"
                  banner-title="Find the right job" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>


    <!--    Career Details-->
    <div class="container-fluid px-5-percent">

      <!--        back to page-->
      <div class="back-to-page text-center text-md-left">
        <router-link to="/career-list"><i class="el-icon-arrow-left mb-5"/> Back to job page</router-link>
      </div>

      <!--      Job Category Breadcrumb-->
      <div class="job-category-breadcrumb mb-4 text-center text-sm-left">
        <a href="">Accounting / Finance</a>
      </div>

      <!--      Job description Area-->

      <div class="job-description-area">
        <div class="job-description-main">

          <div class="job-title-area mb-5">

            <!--          job title-->
            <div class="job-title text-center text-sm-left">
              <h3>Customer Relationship Officer </h3>
              <p>Square Pharmaceuticals Ltd </p>
            </div>


            <!--job vacancy-->
            <div class="job-vacancy">
              <p>Vacancy <span>02</span></p>
            </div>

          </div>


          <!--            job context-->
          <div class="job-context mb-5">
            <h3 class="mb-3">Job Context</h3>
            <p>Lamano is a premium skin care clinic located at Gulshan 02. It introduces lot of new things first time
              in Bangladesh with international quality and unique technology. Work with Lamano it`s a great
              opportunity to update yourself with international protocol and industry top derma technology. Lamano is
              an excellent platform that has very professional & friendly cooperative environment and that is best for
              learning & earning.</p>
          </div>


          <!--            job responsibility-->
          <div class="job-responsibility mb-5">
            <h3 class="mb-3">Job Responsibilities</h3>
            <ul>
              <li>Patient management</li>
              <li>Make appointment, patient file management</li>
              <li>Must have the capability to attend overseas phone call and quarries</li>
              <li>Should have the ability to handle pressure</li>
              <li>Need to have good Customer Service skill</li>
              <li>Should have basic computer knowledge including Microsoft Office and email</li>
              <li>Ability to work with the team</li>
              <li>Any other responsibility assigned by management</li>
            </ul>
          </div>


          <!--           job/employment status-->
          <div class="employment-status mb-5">
            <h3 class="mb-3">employment status</h3>
            <ul>
              <li>Full time</li>
            </ul>
          </div>

          <!--            Educational Requirements-->
          <div class="edu-requirement mb-5">
            <h3 class="mb-3">Educational Requirements</h3>
            <ul>
              <li>At least 2 year(s)</li>
              <li>The applicants should have experience in the following area(s): Call centre training, Customer
                Relation, Customer Support/ Client Service, Front Office
              </li>
              <li> The applicants should have experience in the following business area(s): Hospital, Hotel, Tour
                Operator
              </li>

            </ul>
          </div>

          <!--            job salary-->
          <div class="job-salary mb-5">
            <h3 class="mb-3">Salary</h3>
            <ul>
              <li>Negotiable</li>
            </ul>
          </div>

          <!--       compensation / other benefits-->
          <div class="job-compensation mb-5">
            <h3 class="mb-3">compensation & other benefits</h3>
            <ul>
              <li>Festival bonus: 2</li>
              <li>As per company policy</li>
            </ul>
          </div>


        </div>
      </div>


      <!--      Apply Button Area-->

      <div class="job-apply text-center my-5 py-5">
        <p>Please do not apply without any work experience related to the customers.</p>
        <div class="sq-apply-btn-area">
          <router-link to="/apply" class="mr-2">apply now</router-link>
          <router-link to="">apply with bd jobs</router-link>
        </div>
      </div>

    </div>

    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '@/components/NavigationCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Footer from '@/components/FooterCard.vue';
    import Copyright from '@/components/CopyrightCard.vue';

    @Component({
        name: 'CareerDetails',
        components: {Copyright, Footer, CommonBanner, Navigation},
    })

    export default class CareerDetails extends Vue {

    }
</script>

<style scoped lang="scss">
  .back-to-page {
    a {
      text-decoration: none;
      font-family: $font-roboto;
      font-size: 1.2rem;
      text-transform: capitalize;
      color: #000;
      margin-top: 1.5rem;
      display: inline-block;
    }
  }

  .job-category-breadcrumb {
    background: #f4f4f4;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 7rem;
    @media(max-width: 575px) {
      justify-content: center;
    }

    a {
      font-size: calc(24px + (24 - 20) * ((100vw - 300px) / (1600 - 300)));
      font-family: $font-helvetica-bold;
      color: $brand-color;
      padding: 0 3rem;
      line-height: 1;
      text-decoration: none;
    }
  }

  .job-description-area {
    background: #f4f4f4;
    padding: 3rem;
    @media(max-width: 575px) {
      padding: 1rem;
    }
  }

  .job-description-main {
    background: $white-color;
    padding: 3rem;
    @media(max-width: 575px) {
      padding: 1rem;
    }
  }

  .job-title-area {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media (max-width: 575px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

  }

  .job-title {
    h3 {
      font-family: $font-helvetica-bold;
      color: #414541;
      font-size: calc(24px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
    }

    p {
      font-family: $font-roboto;
      color: #222222;
      font-weight: 500;
      font-size: 1.2rem;
    }
  }

  .job-vacancy {
    p {
      font-family: $font-roboto;
      color: #222222;
      font-weight: 500;
      font-size: 1.2rem;
    }
  }

  .job-context {
    h3 {
      font-size: calc(20px + (20 - 17) * ((100vw - 300px) / (1600 - 300)));
      font-family: $font-roboto;
      font-weight: 500;
      color: #222222;
      text-transform: capitalize;
    }

    p {
      font-family: $font-roboto;
      color: #6D6D6D;
      font-weight: normal;
      font-size: 18px;
      line-height: 1.8em;
    }
  }

  .job-responsibility, .edu-requirement, .employment-status, .job-salary, .job-compensation {
    h3 {
      font-size: calc(20px + (20 - 17) * ((100vw - 300px) / (1600 - 300)));
      font-family: $font-roboto;
      font-weight: 500;
      color: #222222;
      text-transform: capitalize;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        position: relative;
        padding-left: 1em;
        text-indent: -0.8em;
        display: block;
        font-family: $font-roboto;
        color: #6D6D6D;
        font-weight: normal;
        font-size: 18px;
        margin-bottom: 1.2rem;

        &::before {
          vertical-align: middle;
          display: inline-block;
          width: 10px;
          height: 10px;
          background: $brand-color;
          content: "";
          margin-right: 1rem;
          margin-top: -3px;
        }
      }
    }
  }

  .job-apply {
    p {
      font-family: $font-roboto;
      color: #6D6D6D;
      font-weight: 500;
      font-size: 18px;
    }
  }

  .sq-apply-btn-area {
    a {
      background: $brand-color;
      text-decoration: none;
      font-family: $font-roboto;
      padding: 1rem 3rem;
      text-transform: uppercase;
      color: $white-color;
      display: inline-block;
    }
  }


</style>