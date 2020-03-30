<template>
  <div class="sq-home-area">
    <NavigationCard type="customstyle"/>
    <VideoCard/>
    <OppertunityCard/>
    <MissionCard/>
    <ComplianceCard/>
    <NewssliderCard/>
    <FooterCard/>
    <CopyrightCard/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import NavigationCard from '@/components/NavigationCard.vue';
    import FooterCard from '@/components/FooterCard.vue';
    import CopyrightCard from '@/components/CopyrightCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import VideoCard from '@/components/VideoCard.vue';
    import OppertunityCard from '@/components/OppertunityCard.vue';
    import MissionCard from '@/components/MissionCard.vue';
    import ComplianceCard from '@/components/ComplianceCard.vue';
    import NewssliderCard from '@/components/NewssliderCard.vue';

    @Component({
        name: 'HomePage.vue',
        components: {
            NewssliderCard,
            ComplianceCard,
            MissionCard,
            OppertunityCard,
            VideoCard,
            CommonBanner,
            FooterCard,
            CopyrightCard,
            NavigationCard,
        },
    })
    export default class HomePage extends Vue {

    }
</script>

<style lang="scss">
</style>
