<template>

  <div class="business-details-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/business-details@2x.jpg')"
                  banner-title="Square Pharmaceuticals Ltd." banner-subtitle="We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence
and honesty. Maybe it’s our family orientation, but we think the most satisfying."/>


    <CommonParagraph
            v-bind:ParagraphImage="require('../assets/images/pharma.jpg')"
            ParagraphTitle="Looking beyond the horizon"
            ParagraphSubtitle="Leading pharmaceutical industry of Bangladesh"
            v-bind:paragraph-contents="['In a world in which environmental and social responsibility have become serious concerns, all manufacturers need to understand the environmental impact of  heir products. Life cycle assessments (LCAs), which evaluate the environmental impact of the product from the production of raw materials through to final  disposal, have been performed for all categories of absorbent hygiene products. Across all categories, product improvements in recent decades did not only lead ',
                     'To better performance and improved skin health, but also have resulted in reduced weight of both products and packaging, resulting in substantially reduced environmental impact compared to typical disposable products of the 1980s (EDANA sustainability report, 2007).',
                     'Respect the environment, making rational use of natural resources and taking steps to prevent pollution from the different processes involved in our industrial operations. Promote the sustainable use of raw materials and natural resources. Introduce guide lines for continuously improving our environmental performance. Introduce ']"
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
    import BottomBanner from '@/components/BottomBanner.vue';

    @Component({
        name: 'BusinessDetails',
        components: {CommonParagraph, Copyright, Footer, CommonBanner, Navigation, BottomBanner},
    })

    export default class BusinessDetails extends Vue {

    }
</script>

<style scoped lang="scss">

</style>