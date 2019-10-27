<template>
  <div class="corporate-r-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../../assets/images/cssr@2x.jpg')"
                  banner-title="Corporate Social Responsibility" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>

    <CommonParagraph/>
    <BottomBanner/>

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