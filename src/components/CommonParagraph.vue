<template>
  <section class="common-paragraph-area">
    <div class="container-fluid px-5-percent">
      <div class="row">
        <div class="col-xl-6 py-4 pt-lg-0 float-left c-pl">

          <div class="article-header mb-2 mb-md-5">
            <h1 class="common-title"><span>{{compData.title}}</span></h1>
            <p class="common-sub-title">{{compData.subtitle}}</p>
          </div>

          <div class="res-article-content">
            <p v-html="compData.text"></p>
          </div>

        </div>
        <div class="col-12 m-auto m-lg-0 col-xl-6 csr-r-image float-right">
          <img alt="image" class="img-fluid" :src="HOST + compData.image.original.src">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {TitleSubtitleRichtextCTA} from '@/store/cms.types';
    import {HOST} from '@/global';

    @Component({
        name: 'CommonParagraph',
        components: {},
    })
    export default class CommonParagraph extends Vue {
        @Prop() compData!: TitleSubtitleRichtextCTA;
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">

  .common-paragraph-area {
    min-height: 600px;
    overflow: hidden;
    margin: 3rem 0;
    @media(min-width: 961px) {
      margin: 8rem 0;
    }
  }

  .common-sub-title {
    font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));
    color: #292929;
    font-weight: bold;
    font-family: $font-roboto;
  }

  .common-title {
    line-height: 1;
    margin-bottom: 1.2rem;
    color: $brand-color;
    font-family: $font-helvetica;
    font-weight: bold;
    font-size: calc(24px + (42 - 24) * ((100vw - 300px) / (1600 - 300)));
  }

  .common-title span {
    display: inline-block;
    position: relative;
  }

  .common-title span:before {
    @media(min-width: 1265px) {
      content: "";
      position: absolute;
      height: 5px;
      border-bottom: 4px solid $brand-color;
      top: 50%;
      width: 80px;
    }
    border: 0;
  }

  .common-title span:before {
    right: 100%;
    margin-right: 15px;
  }

  .res-article-content {
    /*text-overflow: ellipsis;*/
    /*display: -webkit-box;*/
    /*-webkit-line-clamp: 5; !* number of lines to show *!*/
    /*-webkit-box-orient: vertical;*/
    p {
      font-family: $font-roboto;
      color: #656565;
      font-size: 18px;
      text-transform: capitalize;
      line-height: 2em;
      max-height: 400px;
      overflow: hidden;
    }
  }

  .csr-r-image {
    img {
      min-height: 600px;
      width: auto;
      object-fit: cover;
      object-position: center;
    }
  }

  .c-pl {
    padding-left: 3%;
    @media(min-width: 1265px) {
      padding-left: 115px;
    }
  }
</style>
