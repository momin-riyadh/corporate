<template>
  <div class="sq-mission-img">
    <img :src="HOST + compData.value.image.original.src" alt="square_group" class="img-fluid">
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

</style>