<template>
  <div class="sq-about-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/about.jpg')"
                  banner-title="Who we are" banner-subtitle="SQUARE today symbolizes a name – a state of mind. But its journey to the
growth and prosperity has been no bed of roses."/>

    <div class="sq-about-main">
      <div class="container-fluid px-5-percent">

      </div>
    </div>


    <Footer/>
    <Copyright/>
  </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from "@/components/Navigation.vue";
    import CommonBanner from "@/components/CommonBanner.vue";
    import Footer from "@/components/Footer.vue";
    import Copyright from "@/components/Copyright.vue";

    @Component({
        name: 'About',
        components: {Copyright, Footer, CommonBanner, Navigation},
    })

    export default class About extends Vue {

    }

</script>
<style scoped lang="scss">

</style>
