<template>
  <div class="stock-information-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../../assets/images/si@2x.jpg')"
                  banner-title="Stock Information" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>


    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '../Navigation.vue';
    import CommonBanner from '../CommonBanner.vue';
    import Footer from '../Footer.vue';
    import Copyright from '../Copyright.vue';

    @Component({
        name: 'StockInformation',
        components: {Copyright, Footer, CommonBanner, Navigation},
    })
    export default class StockInformation extends Vue {

    }
</script>

<style scoped lang="scss">

</style>