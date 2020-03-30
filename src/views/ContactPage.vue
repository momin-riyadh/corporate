<template>
  <div class="sq-contact">
    <Navigation type="op-nav"/>

    <CommonBanner v-bind:ImageUrl="require('../assets/images/contact@2x.jpg')" BannerTitle="contact us" BannerSubtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>

    <MapCard/>
    <ContactFormCard/>
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
    import MapCard from "@/components/MapCard.vue";
    import ContactFormCard from "@/components/ContactFormCard.vue";


    @Component({
        name: 'ContactPage.vue',
        components: {ContactFormCard, CommonBanner, MapCard, Copyright, Footer, Navigation},
    })
    export default class Contact extends Vue {

    }
</script>

<style scoped lang="scss">

</style>
