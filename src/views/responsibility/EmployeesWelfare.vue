<template>
  <div class="employees-welfare-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../../assets/images/ew@2x.jpg')"
                  banner-title="Environmental responsibility" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>


    <CommonParagraph v-bind:ParagraphImage="require('../../assets/images/ew@2x.jpg')"
                     ParagraphTitle="Looking beyond the horizon"
                     ParagraphSubtitle="Leading pharmaceutical industry of Bangladesh"

                     v-bind:paragraph-contents="['In a world in which environmental and social responsibility have become serious concerns, all manufacturers need to understand the environmental impact of  heir products. Life cycle assessments (LCAs), which evaluate the environmental impact of the product from the production of raw materials through to final  disposal, have been performed for all categories of absorbent hygiene products. Across all categories, product improvements in recent decades did not only lead ',
                     'To better performance and improved skin health, but also have resulted in reduced weight of both products and packaging, resulting in substantially reduced environmental impact compared to typical disposable products of the 1980s (EDANA sustainability report, 2007).',
                     'Respect the environment, making rational use of natural resources and taking steps to prevent pollution from the different processes involved in our industrial operations. Promote the sustainable use of raw materials and natural resources. Introduce guide lines for continuously improving our environmental performance. Introduce ']"/>


    <BottomBanner v-bind:BottomImage="require('../../assets/images/business@2x.jpg')" BottomTitle="Enhance society and the
environment of contributing"
                  BottomText="SQUARE’s activity goes well beyond the sphere of business. As socially conscious and responsible corporate body SQUARE is committed to the
improvement of the society as a whole. Meril Prothom Alo festival sponsored by SQUARE, has become a national calendar event. SQUARE helps many
NGO’s in their effort to make available healthcare to the disadvantage population of the country. It sponsors programs to build awareness on
 the healthcare need. SQUARE is also a major sponsor of sporting events in the country."

    />


    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '@/components/Navigation.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Copyright from '@/components/Copyright.vue';
    import Footer from '@/components/Footer.vue';
    import BottomBanner from '@/components/BottomBanner.vue';
    import CommonParagraph from '@/components/CommonParagraph.vue';

    @Component({
        name: 'EmployeesWelfare',
        components: {Navigation, CommonBanner, Footer, Copyright, BottomBanner, CommonParagraph},
    })
    export default class EnvironmentalResponsibility extends Vue {

    }
</script>

<style scoped lang="scss">

</style>