<template>
  <!--  Single News/Media Component-->
  <div class="container-fluid px-5-percent">
    <div class="row">
      <div class="sq-news-media-main align-items-center">
        <div class="news-media-thumbnail" v-for="(article, idx) in compData.contents" :key="'n' + idx">
          <img class="img-fluid" :src="HOST + article.banner.src" alt="square group">
          <div class="news-media-caption my-4">
            <h5>{{article.title}}</h5>
            <p>{{article.short_description}}</p>
            <router-link :to="article.link">read more</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mb-5">
      <el-pagination
              background
              layout="prev, pager, next"
              :total="30">
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {NewslistBlock} from '@/store/cms.types';
    import {HOST} from '@/global';


    @Component({
        name: 'SinglenewsCard',
        components: {}
    })


    export default class SinglenewsCard extends Vue {
        @Prop() compData!: NewslistBlock;
        HOST: string = HOST;
    }

</script>

<style scoped lang="scss">
  .sq-news-media-main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .news-media-thumbnail {
    width: calc(100% - 30px);
    margin: 0 15px 30px 15px;
    flex-shrink: 0;
    align-self: flex-start;
    @media (min-width: 600px) {
      width: calc(50% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 961px) {
      width: calc(33.3333% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 1265px) {
      width: calc(25% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 1905px) {
      width: calc(20% - 30px);
      margin: 0 15px 30px;
    }
  }

  .news-media-caption {
    h5 {
      font-family: $font-helvetica-bold;
      color: #3c3c3c;
    }

    p {
      color: #6D6D6D;
      font-size: 1rem;
      font-family: $font-roboto;
    }

    a {
      transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
      padding: .8rem 2.5rem;
      text-decoration: none;
      text-transform: capitalize;
      border-radius: .3rem;
      display: inline-block;
      font-family: $font-roboto;
      font-weight: normal;
      border: 2px solid $brand-color;
      color: #222222;

      &:hover,
      &:focus {
        color: #fff;
        outline: 0;
      }

      &:hover {
        box-shadow: 0 0 40px 40px $brand-color inset;
      }
    }
  }
</style>
