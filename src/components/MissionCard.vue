<template>
  <div class="sq-mission-area">

    <div class="sq-mission-title">
      <h1>{{compData.title}}</h1>
      <p>{{compData.subtitle}}</p>
    </div>

    <div class="row">
      <div class="col text-center">
        <div class="row text-left pt-4">
          <div v-for="(cards, idx) in compData.contents" :key="'c' + idx" :class="{'col-12': true, 'col-lg-4': true, 'mb-4': idx === 0, 'sq-mission-text': true, 'pr-0': idx === 0, 'pr-md-5': idx === 0, 'pl-3': idx > 0, 'pl-lg-5': idx }">
            <div v-for="(mtitle, idx) in cards.value" :key="'c' + idx" >
              <h3>{{mtitle.title}}</h3>
              <p>{{mtitle.text}}</p>
            </div>
          </div>
        </div>
<!--        <div v-for="(fimg, idx) in compData.contents"  :key="'img' + idx" class="sq-mission-img col-12 p-0">-->
<!--          <img :src="HOST + fimg.value.image.original.src" alt="" class="img-fluid">-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {TitleSubtitleStreamBlock} from '@/store/cms.types';
    import {HOST} from '@/global';

    @Component({
        name: 'MissionCard',
        components: {}
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