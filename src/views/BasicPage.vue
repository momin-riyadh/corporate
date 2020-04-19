<template>
  <div v-show="pageData" :key="pageData.id" class="basic-page">
    <!--========================================
                TODO:Components Will Be Move
        ========================================-->
    <NavigationCard/>

    <!--=============================
                Common Banner
        =============================-->
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


    <!--=================================
           BasicPage Components Loop
        =================================-->
    <component
            v-for="comp in pageData.body"
            :key="comp.id"
            :is="comp.type"
            :comp-data="comp.value">
    </component>
    <!--    End-->


    <CommonParagraph/>

    <!--============================================
            TODO: Components Will Be Move/Update
        ============================================-->
    <FooterCard/>
    <CopyrightCard/>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import NavigationCard from '@/components/NavigationCard.vue'
    import FooterCard from '@/components/FooterCard.vue';
    import CopyrightCard from '@/components/CopyrightCard.vue';
    import {BasicPageData} from '@/store/cms.types';
    import {HOST} from '@/global';
    import CommonParagraph from '@/components/CommonParagraph.vue';
    import BottomBanner from '@/components/BottomBanner.vue';


    @Component({
        name: 'BasicPage',
        components: {
            CommonParagraph,
            NavigationCard,
            CopyrightCard,
            FooterCard,
            title_text_banner_image: BottomBanner,
        }
    })

    export default class BasicPage extends Vue {
        @Prop() pageData!: BasicPageData;
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">

  /*Common Banner Style*/
  .common-banner-area {
    height: 50vh;
    width: 100%;
    display: block;
    overflow: hidden;
    margin-bottom: 1rem;
    @media(min-width: 961px) {
      margin-bottom: 5rem;
    }
  }

  .common-banner {
    position: relative;
    width: 100%;
    height: 50vh;

    &::before {
      width: 100%;
      height: 100%;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.5) 0%);
    }

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
      -o-object-fit: cover;
      object-position: center center;
    }
  }

  .banner-content {
    color: $white-color;
    text-align: center;
    width: 100%;
    padding: 0 1rem;
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    h1 {
      font-size: calc(24px + (45 - 24) * ((100vw - 300px) / (1600 - 300)));
      text-transform: capitalize;
      font-family: $font-helvetica-bold;
    }

    p {
      font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
      font-family: $font-roboto;
    }

    @media (min-width: 992px) {
      max-width: 1024px;
    }
  }

  /*End Common Banner Style*/
</style>
