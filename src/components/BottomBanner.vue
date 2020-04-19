<template>
  <div class="bottom-banner-area">
    <div class="container-fluid px-5-percent">
      <div class="bottom-banner">
        <img class="img-fluid" :src="HOST + compData.image.original.src" alt="">
        <div class="col-6 mx-auto bottom-banner-text text-center">
          <h1>
            {{compData.title}}
          </h1>
        </div>


        <div class="row justify-content-center">
          <div class="col-xl-10 col-sm-10">
            <div class="bottom-paragraph-text text-center">
              <p>{{compData.text}}</p>
            </div>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {TitleTextBannerImage} from '@/store/cms.types';
    import {HOST} from '@/global';

    @Component({
        name: 'BottomBanner',
        components: {},
    })

    export default class BottomBanner extends Vue {
        @Prop() compData!: TitleTextBannerImage;
        HOST: string = HOST;

        // @Prop() public BottomTitle!: string;
        // @Prop() public BottomText!: string;
        // @Prop() public BottomImage!: string;
    }
</script>

<style scoped lang="scss">
  .bottom-banner-area {
    overflow: hidden;
  }

  .bottom-banner {
    display: block;
    position: relative;
    height: 100%;

    img {
      position: relative;
      height: 400px;
      width: 100%;
      object-fit: cover;

      &::before {
        width: 100%;
        height: 100%;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: -webkit-gradient(linear, left top, left bottom, color-stop(100%, rgba(0, 0, 0, 0.3)), color-stop(0%, rgba(0, 0, 0, 0.3)));
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 0%);
      }
    }
  }

  .bottom-banner-text {
    position: absolute;
    left: 50%;
    top: 20%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);

    h1 {
      color: $white-color;
      font-size: calc(16px + (42 - 16) * ((100vw - 300px) / (1600 - 300)));;
    }

  }

  .bottom-paragraph-text {
    margin-top: -100px;
    background: #F4F4F4;
    padding: 1rem;
    color: $paragraph-color;
    font-size: $paragraph-size;
    @media(min-width: 601px) {
      padding: 4rem;
    }

    p {
      font-family: $font-roboto;
      line-height: 2em;
      font-size: .9rem;
      @media(min-width: 601px) {
        font-size: 1.1rem;
      }
    }
  }
</style>
