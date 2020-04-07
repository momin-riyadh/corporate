<template>
  <div class="sq-mission-img col-12 p-0">
    <img :src="HOST + compData.image.original.src" alt="square_group" class="img-fluid">
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {SingleImage} from '@/store/cms.types';
    import {HOST} from '@/global';

    @Component({
        name: 'SingleImageCard',
        components: {}
    })
    export default class SingleImageCard extends Vue {
        @Prop() compData!: SingleImage;
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">
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