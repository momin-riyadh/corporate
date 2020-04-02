<template>
  <div class="row align-items-center">
    <div class="col-lg-6">
      <div class="sq-h-content">
        <h1 class="sq-h-content-title mb-4"><span>{{compData.title}}</span></h1>
        <p>{{compData.text}}</p>
      </div>
      <div class="sq-logo-bg">
        <img src="../assets/images/sq-logobg.svg" alt="square">
      </div>
    </div>
    <div class="col-lg-6">
      <img :src="HOST + compData.image.original.src" alt="" class="img-fluid float-right">
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator'
    import {TitleTextOneSideImage} from "@/store/cms.types";
    import {HOST} from "@/global";

    @Component({
        name: 'OppertunityCard',
        components: {}
    })

    export default class OppertunityCard extends Vue {
        @Prop() compData!: TitleTextOneSideImage;
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">
  .sq-h-content {
    p {
      margin-left: 0;
      color: #696969;
      font-family: $font-roboto;
      max-width: 600px;
      line-height: 2em;
      position: relative;
      top: 0;
      @media(min-width: 601px) {
        margin-left: 150px;
        color: #696969;
        font-family: $font-roboto;
        max-width: 600px;
        line-height: 2em;
        position: relative;
        top: 80px;
      }
    }
  }

  .sq-h-content-title {
    line-height: 1.2;
    font-family: $font-helvetica-bold;
    font-weight: bold;
    font-size: calc(24px + (45 - 24) * ((100vw - 300px) / (1600 - 300)));
    margin-left: 0;
    position: relative;
    @media(min-width: 601px) {
      line-height: 1.2;
      font-family: $font-helvetica-bold;
      font-weight: bold;
      font-size: calc(24px + (45 - 24) * ((100vw - 300px) / (1600 - 300)));
      margin-left: 95px;
      position: relative;
    }

    &::before {
      content: "";
      position: absolute;
      height: 5px;
      border-bottom: 4px solid $brand-color;
      top: 30%;
      width: 80px;
      right: 100%;
      margin-right: 15px;
      display: none;
      @media(min-width: 601px) {
        content: "";
        position: absolute;
        height: 5px;
        border-bottom: 4px solid $brand-color;
        top: 30%;
        width: 80px;
        right: 100%;
        margin-right: 15px;
        display: block;
      }
    }

    span {
      display: inline-block;
      position: relative;
    }
  }

  .sq-logo-bg {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-start;
    z-index: -1;
    bottom: 120px;
    position: relative;
    @media (max-width: 600px) {
      display: none;
    }

    img {
      width: 400px;
      height: 400px;
    }
  }
</style>