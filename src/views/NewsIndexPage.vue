<template>
  <div v-show="pageData" :key="pageData.id" class="news-page">
    <NavigationCard/>

    <!--=============================
             Common Banner
     =============================-->
    <div class="common-banner-area">
      <div class="container-fluid p-0">
        <div class="common-banner js-bannerimage">
          <img class="img-fluid" :src="HOST + pageData.banner_image.url" alt="square">

          <div class="banner-content">
            <h1 class="jstitle"> {{ pageData.title }}</h1>
            <p class="jssubtitle"> {{ pageData.text }}</p>
          </div>

        </div>
      </div>
    </div>
    <!--    End-->


    <!--=================================
            NewsPage Components Loop
        =================================-->
    <component
            v-for="comp in pageData.body"
            :key="comp.id"
            :is="comp.type"
            :comp-data="comp.value">
    </component>
    <!--    End-->

    <FooterCard/>
    <CopyrightCard/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import NavigationCard from '@/components/NavigationCard.vue';
    import FooterCard from '@/components/FooterCard.vue';
    import CopyrightCard from '@/components/CopyrightCard.vue';
    import SinglenewsCard from '@/components/SinglenewsCard.vue';
    import {NewsIndexPageData} from '@/store/cms.types';
    import {HOST} from '@/global';



    @Component({
        name: 'NewsIndexPage',
        components: {
            CopyrightCard,
            FooterCard,
            NavigationCard,
            news_block: SinglenewsCard,
        },
    })

    export default class NewsIndexPage extends Vue {
        @Prop() pageData!: NewsIndexPageData;
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">

</style>
