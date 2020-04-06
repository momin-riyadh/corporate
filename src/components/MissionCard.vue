<template>
  <div class="sq-mission-area">


    <div class="sq-mission-title">
      <h1>{{compData.title}}</h1>
      <p>{{compData.subtitle}}</p>
    </div>


    <div class="row">
      <div class="col text-center">
        <component
                v-for="comp in compData.contents"
                :key="comp.id"  :is="comp.type"
                :comp-data="comp.image">
        </component>
      </div>
    </div>


  </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {TitleSubtitleStreamBlock} from '@/store/cms.types';
    import SingleImageCard from '@/components/SingleImageCard.vue';
    import TitleTextColumnCard from '@/components/TitleTextColumnCard.vue';
    import {HOST} from '@/global';

    @Component({
        name: 'MissionCard',
        components: {
          single_image:SingleImageCard,
          title_text_column:TitleTextColumnCard},
    })
    export default class MissionCard extends Vue {
        @Prop() compData!: TitleSubtitleStreamBlock;
        HOST: string = HOST;
    }
</script>
<style scoped lang="scss">
  .sq-mission-area {
    background: #F4F4F4;
    padding: 30px;
    margin-bottom: calc(3% + 5vh);
    @media(min-width: 600px) {
      padding: 95px;
    }
  }
  .sq-mission-title {
    h1 {
      line-height: 1;
      font-family: $font-helvetica-bold;
      font-weight: bold;
      font-size: calc(24px + (45 - 24) * ((100vw - 300px) / (1600 - 300)));
      display: inline-block;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        height: 0;
        border-bottom: 4px solid $brand-color;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        right: 100%;
        margin-right: 15px;
        @media(min-width: 600px) {
          width: 80px;
          height: 5px;
        }
      }
    }
    p {
      font-family: $font-helvetica-bold;
      font-size: calc(18px + (22 - 18) * ((100vw - 300px) / (1600 - 300)));
      color: #777777;
    }
  }
  .sq-mission-text {
    h3 {
      font-family: $font-roboto;
      font-weight: bold;
      color: $header-color;
    }
    p {
      font-family: $font-roboto;
      color: $paragraph-color;
      line-height: 1.8;
    }
  }
  .sq-mission-img {
    img {
      height: 55vh;
      width: 100%;
      object-fit: cover;
      -o-object-fit: cover;
      object-position: center;
      -o-object-position: center;
    }
  }
</style>