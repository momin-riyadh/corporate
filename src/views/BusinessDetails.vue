<template>

  <div class="business-details-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/business-details@2x.jpg')"
                  banner-title="Square Pharmaceuticals Ltd." banner-subtitle="We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence
and honesty. Maybe it’s our family orientation, but we think the most satisfying."/>

    <CommonBusiness/>

    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import Navigation from '@/components/NavigationCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Footer from '@/components/FooterCard.vue';
    import Copyright from '@/components/CopyrightCard.vue';
    import CommonParagraph from '@/components/CommonParagraph.vue';
    import BottomBanner from '@/components/BottomBanner.vue';
    import CommonBusiness from '@/components/CommonBusiness.vue';

    @Component({
        name: 'BusinessDetails',
        components: {CommonParagraph, Copyright, Footer, CommonBanner, Navigation, BottomBanner, CommonBusiness},
    })

    export default class BusinessDetails extends Vue {

    }
</script>

<style scoped lang="scss">

</style>