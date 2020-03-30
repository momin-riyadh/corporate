<template>
  <div>
    <NavigationCard/>
    <CommonBanner/>
    <SinglenewsCard/>
    <FooterCard/>
    <CopyrightCard/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import SinglenewsCard from '@/components/SinglenewsCard.vue';
    import NavigationCard from '@/components/NavigationCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import FooterCard from '@/components/FooterCard.vue';
    import CopyrightCard from '@/components/CopyrightCard.vue';

    @Component({
        name: 'NewsIndexPage',
        components: {CopyrightCard, FooterCard, CommonBanner, NavigationCard, SinglenewsCard},
    })

    export default class NewsIndexPage extends Vue {

    }
</script>

<style scoped lang="scss">

</style>