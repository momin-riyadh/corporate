<template>
  <div class="fullscreen-video-wrap">
    <video
      src="../assets/images/video/finalbg.mp4"
      autoplay="autoplay"
      loop="loop"
      muted
      playsinline
    ></video>
    <div class="header-overlay"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { YoutubeVideoBlock } from "@/store/cms.types";

@Component({
  name: "VideoCard",
  components: {}
})
export default class VideoCard extends Vue {
  @Prop() compData!: YoutubeVideoBlock;
}
</script>

<style scoped lang="scss">
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

@media (max-width: 960px) {
  .containers {
    padding-right: 3rem;
    padding-left: 3rem;
  }
}

</style>
