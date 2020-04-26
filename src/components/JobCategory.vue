<template>
  <div class="container-fluid px-5-percent">

    <div ref="jsjobarea" class="job-category-area overflow-auto">
      <div class="job-category mb-3 mb-sm-4">
        <ul>
          <li v-for="(category, index) in compData.categories" :key="'c' + index">
            <router-link :to="category.link"> {{ category.title }}
              <span> ({{category.count}})</span>
            </router-link>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {JobCategoryListBlock} from '@/store/cms.types';
    import {HOST} from '@/global';


    @Component({
        name: 'JobCategory',
        components: {},
    })

    export default class JobCategory extends Vue {
        @Prop() compData!: JobCategoryListBlock;
        HOST: string = HOST;
    }

</script>

<style scoped lang="scss">
  .job-category {
    ul {
      list-style: none;
      column-count: 1;
      column-gap: 6rem;
      margin: 0;
      padding: 0;
      display: block;
      @media(min-width: 961px) {
        column-count: 2;
      }
      @media(min-width: 1265px) {
        column-count: 3;
      }
      @media(min-width: 1905px) {
        column-count: 4;
      }

      li {
        margin: 0;
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;

        a {
          transition: all 0.3s ease-in-out;
          display: block;
          width: 100%;
          padding: 1.5em 0;
          text-decoration: none;
          font-family: $font-roboto;
          color: #222222;
          font-size: calc(17px + (17 - 15) * ((100vw - 300px) / (1600 - 300)));
          z-index: 1;
          position: relative;
          border-bottom: 1px solid #D8D8D8;

          &::before {
            content: '';
            z-index: -1;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: 0;
            background-color: #efefef;
            transform-origin: center top;
            transform: scaleY(0);
            transition: transform 0.25s ease-in-out;
          }

          &:hover::before {
            transform-origin: center bottom;
            transform: scaleY(1);
          }
        }
      }
    }
  }
</style>
