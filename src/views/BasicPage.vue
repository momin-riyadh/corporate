<template>
  <div class="basic-page">
          <component
                v-for="comp in pageData.body"
                :key="comp.id"
                :is="comp.type"
                :comp-data="comp.value">
        </component>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {BasicPageData} from '@/store/cms.types';
    import {HOST} from '@/global';

    @Component({
        name: 'BasicPage',
        components: {}
    })

    export default class BasicPage extends Vue {
        @Prop() pageData!: BasicPageData;
        HOST :string = HOST;
    }
</script>

<style scoped lang="scss">

</style>
