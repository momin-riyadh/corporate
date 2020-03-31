<template>
  <div class="job-category-title text-center">
    <h1 class="common-title"><span>Browse Category</span></h1>
    <p class="common-sub-title">We strive to go beyond for our clients a relationship built on trust, confidence
      and honesty.</p>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'JobTitleCard',
        components: {}
    })
    export default class JobTitleCard extends Vue {

    }
</script>

<style scoped lang="scss">

  .job-category-title {
    margin-bottom: 1rem;
    margin-top: 2rem;
    @media all and (min-width: 601px) {
      margin-bottom: 7rem;
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