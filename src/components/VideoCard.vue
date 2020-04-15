<template>
  <div class="fullscreen-video-wrap">
    <iframe height="100%" width="100%"
            src="https://www.youtube.com/embed/IY9hnAw-ZOc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=IY9hnAw-ZOc"
            frameborder="0" allowfullscreen>

    </iframe>
    <div class="header-overlay"></div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import {YoutubeVideoBlock} from "@/store/cms.types";
    import {HOST} from '@/global'

    @Component({
        name: "VideoCard",
        components: {}
    })
    export default class VideoCard extends Vue {
        @Prop() compData!: YoutubeVideoBlock;
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">
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
    background: #000;
    bottom: 0;
    right: 0;
    z-index: -99;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    @media (min-aspect-ratio: 16/9) {
      height: 300%;
      top: -100%;
    }
    @media (max-aspect-ratio: 16/9) {
      width: 300%;
      left: -100%;
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
    }
  }

  .fullscreen-video-wrap iframe {
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

  @media (max-width: 960px) {
    .containers {
      padding-right: 3rem;
      padding-left: 3rem;
    }
  }

</style>
