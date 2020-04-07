<template>
  <div class="sq-home-area">
    <NavigationCard type="customstyle"/>

    <!--    Video Card-->
    <div class="home-page-animation-area overflow-hidden">
      <div class="home-page-animation">
        <header class="v-header containers">
          <component
                  v-for="comp in pageData.header"
                  :key="comp.id"
                  :is="comp.type"
                  :comp-data="comp.value"
          ></component>

        </header>
      </div>
    </div>

    <!--Homepage All Components-->
    <section>
      <div class="container-fluid px-5-percent">
        <div class="sq-h-content-area">
          <component
                  v-for="comp in pageData.body"
                  :key="comp.id"
                  :is="comp.type"
                  :comp-data="comp.value">
          </component>
        </div>
      </div>
    </section>
    <!--    End-->

    <!-- <MissionCard/> -->
    <NewssliderCard/>
    <FooterCard/>
    <CopyrightCard/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import NavigationCard from '@/components/NavigationCard.vue';
    import FooterCard from '@/components/FooterCard.vue';
    import CopyrightCard from '@/components/CopyrightCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import VideoCard from '@/components/VideoCard.vue';
    import OppertunityCard from '@/components/OppertunityCard.vue';
    import MissionCard from '@/components/MissionCard.vue';
    import ComplianceCard from '@/components/ComplianceCard.vue';
    import NewssliderCard from '@/components/NewssliderCard.vue';
    import {HomePageData} from '@/store/cms.types';
    import HeaderText from '../components/HeaderText.vue';

    @Component({
        name: "HomePage",
        components: {
            title_subtitle_text_overlay_image: ComplianceCard,
            title_subtitle_stream_block: MissionCard,
            title_text_one_side_image: OppertunityCard,
            youtube_video_block: VideoCard,
            title_text_cta: HeaderText,
            title_subtitle_newslist:NewssliderCard,
            CommonBanner,
            FooterCard,
            CopyrightCard,
            NavigationCard
        },
    })
    export default class HomePage extends Vue {
        @Prop() pageData!: HomePageData;
    }
</script>

<style lang="scss">
  .home-page-animation {
    position: relative;
    height: calc(100vh);

    &::before {
      width: 100%;
      height: 100%;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0.3) 100%,
                      rgba(0, 0, 0, 0.3) 0%
      );
      z-index: 2;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      object-position: center center;
      position: relative;
    }
  }

  .home-page-animation-caption {
    z-index: 3;
    position: absolute;
    left: 5%;
    bottom: 15%;

    h1 {
      font-family: $font-helvetica-bold;
      color: $white-color;
      font-size: calc(24px + (55 - 24) * ((100vw - 300px) / (1600 - 300)));
    }

    p {
      color: $white-color;
      font-size: calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
    }
  }

  .v-header {
    height: 100vh;
    display: flex;
    align-items: center;
    color: #fff;
  }

  .containers {
    max-width: 960px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: auto;
    text-align: center;
  }

  .fullscreen-video-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .fullscreen-video-wrap video {
    min-height: 100%;
    min-width: 100%;
    @media (min-aspect-ratio: 16/9) {
      width: 100%;
      height: auto;
    }
    @media (max-aspect-ratio: 16/9) {
      width: auto;
      height: 100%;
    }
  }

  .header-overlay {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
    opacity: 0.4;
  }

  .header-content {
    z-index: 2;
  }

  .header-content h1 {
    font-size: 36px;
    margin-bottom: 0;
    font-family: $font-helvetica-bold;
    @media (min-width: 1905px) {
      font-size: 50px;
    }
  }

  .header-content p {
    font-size: 0.9rem;
    display: block;
    padding-bottom: 1rem;
    font-family: $font-roboto;
    @media (min-width: 1905px) {
      font-size: 1.1rem;
      padding-bottom: 2rem;
    }
  }

  /*.section {*/
  /*  padding: 20px 0;*/
  /*}*/

  /*.section-b {*/
  /*  background: #333;*/
  /*  color: #fff;*/
  /*}*/

  @media (max-width: 960px) {
    .containers {
      padding-right: 3rem;
      padding-left: 3rem;
    }
  }

  /*opportunity card*/
  .sq-h-content-area {
    position: relative;
    overflow: hidden;
    margin: calc(3% + 5vh) 0;
  }

</style>
