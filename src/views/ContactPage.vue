<template>
  <div class="sq-contact" v-show="pageData" :key="pageData.id">
    <Navigation/>

    <!--=================================
                 Common Banner
        =================================-->
    <div class="common-banner-area">
      <div class="container-fluid p-0">
        <div class="common-banner js-bannerimage">
          <img class="img-fluid" :src="HOST + pageData.banner_image.url" alt="square">

          <div class="banner-content">
            <h1 class="jstitle"> {{ pageData.title }}</h1>
            <p class="jssubtitle"> {{ pageData.text }}</p>
          </div>

        </div>
      </div>
    </div>
    <!--    End-->

    <!--================================
           ContactPage Components Loop
        ================================-->
    <component v-for="comp in pageData.body"
               :key="comp.id"
               :is="comp.type"
               :comp-data="comp.value">
    </component>

    <!--End-->


    <MapCard/>
    <ContactFormCard/>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import Navigation from '@/components/NavigationCard.vue';
    import Footer from '@/components/FooterCard.vue';
    import Copyright from '@/components/CopyrightCard.vue';
    import MapCard from '@/components/MapCard.vue';
    import ContactFormCard from '@/components/ContactFormCard.vue';
    import {ContactPageData} from '@/store/cms.types';
    import {HOST} from '@/global';


    @Component({
        name: 'ContactPage.vue',
        components: {
            ContactFormCard,
            MapCard,
            Copyright,
            Footer,
            Navigation
        },
    })
    export default class Contact extends Vue {
        @Prop() pageData!: ContactPageData;
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">

</style>
