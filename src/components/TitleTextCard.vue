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

</style>
