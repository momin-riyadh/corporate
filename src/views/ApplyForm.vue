<template>
  <div class="sq-apply-form-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/career-ref.jpg')"
                  banner-title="Find the right job" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>

    <!--    Square Apply Form For Job-->
    <div class="container-fluid px-5-percent">
      <!--        back to page-->
      <div class="back-to-page text-center text-md-left">
        <router-link to="/career-details" href=""><i class="el-icon-arrow-left mb-5"></i> Back</router-link>
      </div>

      <!--      Apply Form-->
      <div class="main-apply-form-area mb-5">
        <form id="sq-apply-form">
          <div class="form-row">
            <div class="col-md-6 mb-4 pr-1 pr-md-4">
              <label for="firstname">First Name</label>
              <input type="text" id="firstname">
            </div>
            <div class="col-md-6 mb-4 pl-1 pl-md-4">
              <label for="phonenumber">Phone Number</label>
              <input type="text" id="phonenumber">
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-4 pr-1 pr-md-4">
              <label for="email">Email</label>
              <input type="email" id="email">
            </div>
            <div class="col-md-6 mb-4 pl-1 pl-md-4">
              <label for="social-profile">Linkedin / Glassdoor</label>
              <input type="text" id="social-profile">
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-4 pr-1 pr-md-4">
              <label for="major-education">Major Education</label>
              <textarea name="" id="major-education" cols="30" rows="5"/>
            </div>
            <div class="col-md-6 mb-4 pl-1 pl-md-4">
              <label for="core-experience">Core Experience</label>
              <textarea name="" id="core-experience" cols="30" rows="5"/>
            </div>
          </div>

          <!--          Attach Upload BTN-->
          <div class="text-center mt-4 mb-3">
            <label for="files"><i class="fas fa-paperclip"/> Attach CV </label>
            <input type="file" id="files"/>
          </div>
          <button class="apply-btn" type="submit">SEND</button>

        </form>
      </div>
      <!--      End Apply Form-->

    </div>

    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '../components/Navigation.vue';
    import CommonBanner from '../components/CommonBanner.vue';
    import Footer from '@/components/Footer.vue';
    import Copyright from '@/components/Copyright.vue';

    @Component({
        name: 'ApplyForm',
        components: {Copyright, Footer, CommonBanner, Navigation},
    })

    export default class ApplyForm extends Vue {

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

  .main-apply-form-area {
    background: #EFEFEF;
    padding: 1rem;
    @media(min-width: 992px) {
      padding: 5rem;
    }
  }

  #sq-apply-form {
    label {
      display: block;
    }

    input {
      display: block;
      width: 100%;
      font-size: 1.2rem;
      color: #3c3c3c;
      background: $white-color;
      border: none;
      border-radius: 2px;
      padding: 2rem;

      &:hover, &:focus {
        outline: 0;
      }
    }

    textarea {
      display: block;
      width: 100%;
      font-size: 1.2rem;
      color: #3c3c3c;
      background: $white-color;
      border: none;
      border-radius: 2px;
      padding: 1rem 2rem;

      &:hover, &:focus {
        outline: 0;
      }
    }

    .apply-btn {
      display: block;
      width: 100%;
      border: none;
      background: $brand-color;
      color: $white-color;
      padding: 1.8rem 0;
      font-size: 1.2rem;
      font-family: $font-roboto;

    }

    input[type=file] {
      background: transparent;
      display: inline-block !important;
      width: 0;
      height: 0;
      margin: 0;
      padding: 0;
      overflow: hidden;

    }

    label[for=files] {
      padding: 1.5rem 3.5rem;
      background: #000;
      display: inline-block;
      color: $white-color;
      font-family: $font-roboto;
      font-size: 1.2rem;
      cursor: pointer;
    }

  }

</style>