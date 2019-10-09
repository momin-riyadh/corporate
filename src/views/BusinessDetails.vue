<template>

  <div class="business-details-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/business-details@2x.jpg')"
                  banner-title="Square Pharmaceuticals Ltd." banner-subtitle="We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence
and honesty. Maybe it’s our family orientation, but we think the most satisfying."/>


    <CommonParagraph
            paragraph-title="Looking beyond the horizon"
            paragraph-sub-title="Leading pharmaceutical industry of Bangladesh"
            paragraph-content=" SQUARE today symbolizes a name – a state of mind. But its journey to the growth and prosperity has been no bed of roses. From the inception in 1958, it has today burgeoned into one of the top line conglomerates in Bangladesh. Square Pharmaceuticals Ltd., the flagship company, is holding the strong leadership position in the pharmaceutical industry of Bangladesh since 1985 and is now on its way to becoming a high performance global player.


SQUARE Pharmaceuticals Limited is the largest pharmaceutical company in Bangladesh and it has been continuously in the 1st position among all national and multinational companies since 1985. It was established in 1958, converted into a public limited company in 1991 and listed with stock exchanges in 1995. The turnover of Square Pharma was Taka 45.88 Billion (US$ 540 million) with about 16.95% market share having a growth rate of about 8.52% (July 2017– June 2018). "
    />


    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">

    import {Component, Vue, Prop} from 'vue-property-decorator';
    import Navigation from '@/components/Navigation.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Footer from '@/components/Footer.vue';
    import Copyright from '@/components/Copyright.vue';
    import CommonParagraph from '@/components/CommonParagraph.vue';

    @Component({
        name: 'BusinessDetails',
        components: {CommonParagraph, Copyright, Footer, CommonBanner, Navigation},
    })

    export default class BusinessDetails extends Vue {

    }
</script>

<style scoped lang="scss">

</style>