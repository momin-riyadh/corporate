<template>
  <div class="job-category-title text-center">
    <h1 class="common-title"><span>{{ compData.title   }}</span></h1>
    <p class="common-sub-title"> {{compData.text}}</p>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {TitleTextBlock} from '@/store/cms.types';
    import {HOST} from '@/global';

    @Component({
        name: 'TitleTextCard',
        components: {}
    })

    export default class TitleTextCard extends Vue {
        @Prop() compData!: TitleTextBlock;
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">

  .job-category-title {
    margin-bottom: 1rem;
    margin-top: 2rem;
    @media all and (min-width: 601px) {
      margin-bottom: 3rem;
    }
  }

  .common-sub-title {
    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
    color: #939393;
    font-family: $font-roboto;
    padding-top: 10px;
  }

  .common-title {
    line-height: 1;
    color: $brand-color;
    font-family: $font-roboto;
    font-weight: bold;
    font-size: calc(24px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
  }

  .common-title span {
    display: inline-block;
    position: relative;
    padding-bottom: 25px;
  }

  .common-title span:before {
    content: "";
    position: absolute;
    height: .5rem;
    border-bottom: 4px solid $brand-color;
    bottom: 0;
    width: 80px;
  }

  .common-title span:before {
    left: 50%;
    transform: translateX(-50%);
  }

</style>
