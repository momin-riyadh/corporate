<template>
  <div class="container-fluid px-5-percent">
    <div class="sq-home-compliance-area">
      <img :src="HOST + compData.image.original.src" alt="" class="img-fluid">
      <div class="compliance-text">
        <h1 class="mb-2 mb-md-3">{{ compData.title}}</h1>
        <h4 class="mb-3 mb-md-4">{{compData.subtitle}}</h4>
        <p>{{compData.text}}</p>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {TitleSubtitleTextOverlayImage} from '@/store/cms.types';
    import {HOST} from '@/global';

    @Component({
        name: 'ComplianceCard',
        components: {}
    })
    export default class ComplianceCard extends Vue {
        @Prop() compData!: TitleSubtitleTextOverlayImage;
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">
  .sq-home-compliance-area {
    height: 70vh;
    position: relative;
    margin-bottom: calc(3% + 5vh);

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: top;
      -o-object-position: top;
    }
  }

  .compliance-text {
    background: #F9F8F8;
    padding: 2rem;
    left: 2.5%;
    right: 2.5%;
    bottom: -80px;
    width: 95%;
    position: absolute;
    z-index: 2;
    @media(min-width: 800px) {
      left: 95px;
      max-width: 500px;
      padding: 5rem;
    }

    h1 {
      line-height: 1;
      text-transform: capitalize;
      font-family: $font-helvetica-bold;
      font-weight: bold;
      font-size: calc(24px + (45 - 24) * ((100vw - 300px) / (1600 - 300)));
      display: inline-block;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        height: 5px;
        border: 0;
        top: 55%;
        transform: translateY(-55%);
        width: 45px;
        right: 100%;
        margin-right: 5px;
        @media(min-width: 800px) {
          border-bottom: 4px solid $brand-color;
        }
      }
    }

    h4 {
      line-height: 1;
      font-family: $font-helvetica-bold;
      font-weight: bold;
      font-size: calc(20px + (26 - 20) * ((100vw - 300px) / (1600 - 300)));
      display: inline-block;
      position: relative;
    }

    p {
      font-family: $font-roboto;
      color: $paragraph-color;
      font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
    }
  }
</style>