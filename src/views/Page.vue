<template>
  <component
          :is="pageType"
          :page-data="pageData"
          :key="`page-${pageData.id}`"
  ></component>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Getter} from 'vuex-class';
    import {PAGE_DATA} from '@/store/getters.names';
    import {PageData} from '@/store/store.types';
    import HomePage from './HomePage.vue';
    import BasicPage from '@/views/BasicPage.vue';

    @Component({
        name: "Page",
        components: {
            HomePage: HomePage,
            BasicPage: BasicPage
        },
    })
    export default class Page extends Vue {
        @Getter(PAGE_DATA) pageData?: PageData | null;

        get pageType(): string | null {
            if (this.pageData == null) {
                return null;
            }
            // "home.HomePage" will be "HomePage"
            return this.pageData.meta.type.split(".")[1];
        }
    }
</script>
