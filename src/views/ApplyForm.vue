<template>
  <div class="sq-apply-form-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/career-ref.jpg')"
                  banner-title="Find the right job" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>
    <div class="container-fluid px-5-percent">
      <!--        back to page-->
      <div class="back-to-page text-center text-md-left">
        <router-link to="/career-details" href=""><i class="el-icon-arrow-left mb-5"></i> Back</router-link>
      </div>

    </div>

    <ApplyCard/>
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
    import ApplyCard from "@/components/ApplyCard.vue";

    @Component({
        name: 'ApplyForm',
        components: {ApplyCard, Copyright, Footer, CommonBanner, Navigation},
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
</style>