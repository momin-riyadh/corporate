<template>
  <div class="common-banner-area">
    <div class="container-fluid p-0">
      <div class="common-banner js-bannerimage">
        <img class="img-fluid" :src="ImageUrl" alt="square">

        <div class="banner-content">
          <h1 class="jstitle">{{BannerTitle}}</h1>
          <p class="jssubtitle">{{BannerSubtitle}}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {TimelineMax} from 'gsap/all';
    import ScrollMagic from 'scrollmagic';
    import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

    @Component({
        name: 'CommonBanner',
        components: {},
    })
    export default class CommonBanner extends Vue {
        @Prop() public BannerTitle!: string;
        @Prop() public BannerSubtitle!: string;
        @Prop() public ImageUrl!: string;

        bannerScroll() {
            let banneranim = new TimelineMax({});
            banneranim.staggerFromTo('.common-banner', 1, {opacity: 0},
                {opacity: 1}, '0.1');

            let controller = new ScrollMagic.Controller();
            var scene: any = new ScrollMagic.Scene({
                triggerElement: '.common-banner-area',
                reverse: false,
                triggerHook: 'onCenter'
            })
                .setTween(banneranim)
                .addTo(controller);
        }

        public mounted() {
            this.bannerScroll();
        }
    }
</script>

<style scoped lang="scss">
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
</style>
