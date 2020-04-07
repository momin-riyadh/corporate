<template>
  <div class="row text-left pt-4">
    <div v-for="(section, idx) in compData"  :key="'c' + idx" :class="{'col-12': true, 'col-lg-4': true, 'mb-4': idx == 0, 'sq-mission-text': true, 'pr-0': idx == 0, 'pr-md-5': idx == 0, 'pl-3': idx > 0, 'pl-lg-5': idx }">
      <h3>{{section.title}}</h3>
      <p>{{section.text}}</p>
      </div>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {TitleTextColumnChild} from '@/store/cms.types';

    @Component({
        name: 'TitleTextColumnCard',
        components: {}
    })

    export default class TitleTextColumnCard extends Vue {
        @Prop() compData !: TitleTextColumnChild;
    }
</script>

<style scoped lang="scss">
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
</style>