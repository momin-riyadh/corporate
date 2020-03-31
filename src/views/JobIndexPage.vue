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

    <JobImageBlock/>
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
    import JobImageBlock from "@/components/JobImageBlock.vue";
    // import { gsap } from 'gsap';

    @Component({
        name: 'JobIndexPage.vue',
        components: {
            JobImageBlock,
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

</style>
