<template>
  <div class="corporate-r-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../../assets/images/cssr@2x.jpg')"
                  banner-title="Corporate Social Responsibility" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>

    <CommonParagraph v-bind:ParagraphImage="require('../../assets/images/school.jpg')"
      ParagraphTitle="Looking beyond the horizon"
                     ParagraphSubtitle="Leading pharmaceutical industry of Bangladesh"

                     v-bind:paragraph-contents="['Corporate Social Responsibility (Csr) Is The Continuing Commitment By Business To Behave Ethically And Contribute To Economic Development While Improving The Quality Of Life Of The Workforce And Their Families As Well As Of The Local Community And Society At Large.',
                     'Our Business Motivation Is Being Good By Doing Well And To Conduct Transparent Business Operations Based On Market Mechanism Within The Legal, Ethical & Social Framework With Aims To Attain The Mission Reflected By Our Vision. We Scale-up Csr Activities To Consider The Interests Of Our External & Internal Stakeholders Like Customers, Employees, Vendors, Shareholders, Society, Government Etc. And Ecological & Ethical Considerations In All Aspects Of Operations. Square Is One Of The Pioneer Signatories Of United Nations Global Compact (Ungc) In Bangladesh. Ungc Principles Are Aligned With Company’s Culture From The Very Outset.']" />

    <BottomBanner v-bind:BottomImage="require('../../assets/images/csr-bottom@2x.jpg')" BottomTitle="Enhance society and the
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
    import Navigation from '@/components/NavigationCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Copyright from '@/components/CopyrightCard.vue';
    import Footer from '@/components/FooterCard.vue';
    import CommonParagraph from '@/components/CommonParagraph.vue';
    import BottomBanner from '@/components/BottomBanner.vue';


    @Component({
        name: 'CorporatesResponsibility',
        components: {BottomBanner, CommonParagraph, Footer, Copyright, CommonBanner, Navigation},
    })
    export default class CorporatesResponsibility extends Vue {

    }
</script>

<style scoped lang="scss">

</style>