<template>
  <div class="job-category-title text-center">
    <h1 class="common-title"><span>{{   }}</span></h1>
    <p class="common-sub-title">We strive to go beyond for our clients a relationship built on trust, confidence
      and honesty.</p>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component({
      name:'TitleTextBlock',
      components:{

      }
  })

    export default class TitleTextBlock extends Vue{
      // @Prop() compData!:TitleTex
    }
</script>

<style scoped lang="scss">

</style>
