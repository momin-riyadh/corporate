<template>
  <div class="sq-career-list-page">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/career@2x.jpg')"
                  banner-title="Find the right job" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>


    <div class="container-fluid px-15-percent">

      <!--        back to page-->
      <div class="back-to-page text-center text-md-left">
        <router-link to="/career"><i class="el-icon-arrow-left mb-5"></i> Back to job page</router-link>
      </div>

      <!--      Job Category Breadcrumb-->
      <div class="job-category-breadcrumb mb-4 text-center text-sm-left">
        <a href="">Accounting / Finance</a>
      </div>

      <!--Job Single Post Thumbnail-->
      <div class="sq-career-list-area">
        <div class="sq-single-job-thumbnail" v-for="v in 10">
          <div class="single-job-post-title">
            <h3>Accountant</h3>
            <p>Square Pharmaceuticals Ltd </p>
            <small>Dhaka</small>
          </div>
          <div class="single-job-details-link">
            <router-link to="/career-details">Job Details</router-link>
          </div>
        </div>
      </div>
      <!--End-->


    </div>

    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '../components/Navigation.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Footer from '@/components/Footer.vue';
    import Copyright from '@/components/Copyright.vue';

    @Component({
        name: 'CareerList',
        components: {Copyright, Footer, CommonBanner, Navigation}
    })

    export default class CareerList extends Vue {
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

  .sq-career-list-area {
    background: #f4f4f4;
    padding: 30px 30px 15px 30px;
  }

  .sq-single-job-thumbnail {
    background-color: $white-color;
    padding:30px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
    min-height: 210px;
    @media all and (min-width: 800px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      min-height: auto;
      text-align: left;
      padding: 30px;
    }
  }

  .single-job-post-title {
    h3 {
      font-family: $font-helvetica-bold;
      margin-bottom: 5px;
      color: #414541;
    }

    p {
      font-family: $font-roboto;
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 1.2rem;
      color: #222222;
    }

    small {
      font-family: $font-roboto;
      display: inline-block;
      font-size: 1rem;
    }
  }

  .single-job-details-link {
    a {
      transition: all 0.3s ease-in-out;
      background: #F4F4F4;
      font-size: 1.2rem;
      font-family: $font-roboto;
      text-decoration: none;
      color: #222222;
      padding: .5rem 2rem;
      border-radius: 2px;
      &:hover{
        background: $brand-color;
        color: $white-color;
      }
    }
  }
</style>