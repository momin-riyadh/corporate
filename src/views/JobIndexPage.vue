<template>
  <div class="career-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/career@2x.jpg')"
                  banner-title="Find the right job" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>


    <div class="container-fluid px-5-percent">
      <JobTitleCard/>
      <JobCategoryCard/>
      <JobTitleCard/>
      <JobFeaturedCard/>
    </div>


    <!--    Bottom Image Grid-->
    <div class="container-fluid px-5-percent">
      <div class="bottom-image-grid my-5">
        <div class="first-row">
          <img src="../assets/images/grid-one@2x.jpg" alt="square-group" class="img-fluid">
          <img src="../assets/images/grid-two@2x.jpg" alt="square-group" class="img-fluid">
        </div>
        <div class="second-row">
          <img src="../assets/images/grid-three@2x.jpg" alt="square-group" class="img-fluid">
          <img src="../assets/images/grid-four@2x.jpg" alt="square-group" class="img-fluid">
        </div>
      </div>
    </div>

    <FooterCard/>
    <CopyrightCard/>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Navigation from '@/components/NavigationCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import FooterCard from '@/components/FooterCard.vue';
    import CopyrightCard from '@/components/CopyrightCard.vue';
    import JobCategoryCard from '@/components/JobCategoryCard.vue';
    import JobFeaturedCard from '@/components/JobFeaturedCard.vue';
    import JobTitleCard from "@/components/JobTitleCard.vue";
    // import { gsap } from 'gsap';

    @Component({
        name: 'JobIndexPage.vue',
        components: {
            JobTitleCard,
            JobFeaturedCard,
            JobCategoryCard,
            CopyrightCard,
            FooterCard,
            CommonBanner,
            Navigation
        },
    })

    export default class Career extends Vue {
        // public mounted() {
        //     const {jsjobarea} = this.$refs;
        //     gsap.to(jsjobarea, {duration: 2, scrollTo: {y: 400}, ease:"power2"});
        // }

    }

</script>

<style scoped lang="scss">
  .bottom-image-grid {

    .first-row {
      display: flex;
      height: 40vh;
      width: 100%;

      img:first-child {
        flex-grow: 1;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 70%;
        }
      }

      img:last-child {
        flex-shrink: 0;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 30%;
        }
      }
    }

    .second-row {
      display: flex;
      height: 40vh;
      width: 100%;

      img:first-child {
        flex-shrink: 0;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 30%;
        }
      }

      img:last-child {
        flex-grow: 1;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 70%;
        }
      }
    }
  }
</style>
