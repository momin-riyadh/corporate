<template>
  <!--    Bottom Image Grid-->
  <div class="container-fluid px-5-percent">
    <div class="bottom-image-grid my-5">
      <div  v-for="(img, idx) in compData.images" :key="'b' + idx"  :class="{'first-row': idx === 0,'second-row': idx > 0 }">
          <img v-for="(imgitem, idx) in img.rows" :key="'c' + idx" :src="HOST + imgitem.image.original.src" alt="square-group" class="img-fluid">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {MultipleRowImage} from '@/store/cms.types';
    import {HOST} from '@/global';

    @Component({
        name: 'ImageGrid',
        components: {}

    })

    export default class ImageGrid extends Vue {
        @Prop() compData!: MultipleRowImage;
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">
  .bottom-image-grid {

    .first-row {
      display: flex;
      height: 40vh;
      width: 100%;

      img:first-child {
        flex-grow: 1;
        object-fit: cover;
        -o-object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 70%;
        }
      }

      img:last-child {
        flex-shrink: 0;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 30%;
        }
      }
    }

    .second-row {
      display: flex;
      height: 40vh;
      width: 100%;

      img:first-child {
        flex-shrink: 0;
        -o-object-fit: cover;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 30%;
        }
      }

      img:last-child {
        flex-grow: 1;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 70%;
        }
      }
    }
  }
</style>
