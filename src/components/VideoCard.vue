<template>
  <div class="home-page-animation-area overflow-hidden">
    <div class="home-page-animation">
      <header class="v-header containers">
        <div class="fullscreen-video-wrap">
          <video src="../assets/images/video/finalbg.mp4" autoplay="autoplay" loop="loop" muted playsinline>
          </video>
        </div>
        <div class="header-overlay"></div>
        <div class="header-content text-md-center">
          <h1>Welcome to Square Group</h1>
          <p>SQUARE today symbolizes a name – a state of mind. But its journey to the growth and prosperity
            has been no
            bed of roses. From the inception in 1958, it has today burgeoned into one of the top line
            conglomerates in
            Bangladesh.</p>
          <router-link to="/about" class="video-btn">Find Out More</router-link>
        </div>

      </header>
    </div>


  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'VideoCard',
        components: {},
    })
    export default class VideoCard extends Vue {

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
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 0%);
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
    @media(min-width: 1905px) {
      font-size: 50px;
    }
  }

  .header-content p {
    font-size: .9rem;
    display: block;
    padding-bottom: 1rem;
    font-family: $font-roboto;
    @media(min-width: 1905px) {
      font-size: 1.1rem;
      padding-bottom: 2rem;
    }
  }

  .video-btn {
    transition: all 0.3s ease-in-out;
    border: 1px solid $brand-color;
    color: #fff;
    font-family: $font-roboto;
    font-weight: lighter;
    border-radius: 2px;
    font-size: 1.2rem;
    padding: .6rem 1rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: $brand-color;
    }
  }

  .section {
    padding: 20px 0;
  }

  .section-b {
    background: #333;
    color: #fff;
  }

  @media(max-width: 960px) {
    .containers {
      padding-right: 3rem;
      padding-left: 3rem;
    }
  }
  .v-header{
      .hero__arrow-btn__icon {
          height: 2rem;
          -webkit-transform: translateY(2px);
          transform: translateY(2px);
          width: 2rem;
      }
  }

  .v-header {
      .hero__arrow-btn__pulse {
          background-color: #fff;
          border-radius: 50%;
          height: .3rem;
          left: 50%;
          opacity: 0;
          position: absolute;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          width: .3rem;
      }
  }

  .v-header .hero__arrow-btn {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    bottom: 1rem;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 4rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    left: 50%;
    opacity: 0;
    position: absolute;
    -webkit-transition: background-color .3s ease-out;
    transition: background-color .3s ease-out;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 4rem;
    z-index: 4;
    &:focus{
        outline: none;
    }
    &:hover {
      background-color: hsla(0, 0%, 100%, .2);
        outline: none;
    }



    .hero__arrow-btn__icon {
      height: 1.5rem;
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
      width: 1.5rem;
    }
  }
</style>
