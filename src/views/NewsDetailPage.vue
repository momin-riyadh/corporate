<template>
  <div>
    <NavigationCard/>
    <SinglePostCard/>
    <FooterCard/>
    <CopyrightCard/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import NavigationCard from '@/components/NavigationCard.vue';
    import FooterCard from '@/components/FooterCard.vue';
    import CopyrightCard from '@/components/CopyrightCard.vue';
    import SinglePostCard from '@/components/SinglePostCard.vue';

    @Component({
        name: 'NewsDetailPage',
        components: {SinglePostCard, CopyrightCard, FooterCard, NavigationCard},
    })

    export default class NewsDetailPage extends Vue {
    }
</script>

<style scoped lang="scss">

</style>
