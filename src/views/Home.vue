<template>
  <div class="sq-home-area">
    <Navigation type="customstyle"/>
    <VideoCard/>
    <OppertunityCard/>
    <MissionCard/>
    <ComplianceCard/>
    <NewssliderCard/>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '@/components/NavigationCard.vue';
    import Footer from '@/components/FooterCard.vue';
    import Copyright from '@/components/CopyrightCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import VideoCard from '@/components/VideoCard.vue';
    import OppertunityCard from "@/components/OppertunityCard.vue";
    import MissionCard from "@/components/MissionCard.vue";
    import ComplianceCard from "@/components/ComplianceCard.vue";
    import NewssliderCard from "@/components/NewssliderCard.vue";

    @Component({
        name: 'Home',
        components: {
            NewssliderCard,
            ComplianceCard,
            MissionCard,
            OppertunityCard,
            VideoCard,
            CommonBanner,
            Copyright,
            Footer,
            Navigation,
        },
    })
    export default class Home extends Vue {

    }
</script>

<style lang="scss">
</style>
