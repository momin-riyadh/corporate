<template>
  <div v-show="pageData" :key="pageData.id" class="job-category-page">


    <!--======================================
        JobCategory Page Components Loops
        ======================================-->
    <component
            v-for="comp in pageData.body"
            :key="comp.id"
            :is="comp.type"
            :comp-data="comp.value">
    </component>

    <!--End-->
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {JobIndexPageData} from '@/store/cms.types';
    import {HOST} from '@/global';

    @Component({
        name: 'JobCategoryPage',
        components: {},
    })

    export default class JobCategoryPage extends Vue {
        @Prop() pageData!: JobIndexPageData;
        HOST: string = HOST
    }
</script>

<style scoped lang="scss">

</style>
