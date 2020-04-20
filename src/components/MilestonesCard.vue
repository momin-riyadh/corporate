<template>
  <!--  Square Group Milestones [richtext_image]-->
  <div class="container-fluid px-5-percent">
    <div class="sq-milestones-area my-5">

      <div class="sq-milestones">
        <div class="sq-milestone-list" v-html="compData.text"></div>
        <div class="sq-milestone-image">
          <img class="img-fluid" :src="HOST + compData.image.original.src" alt="square">
        </div>
      </div>

    </div>
  </div>
  <!--      End Square Group Milestones-->
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {RichTextImageBlock} from '@/store/cms.types';
    import {HOST} from '@/global';


    @Component({
        name: 'MilestonesCard',
        components: {}
    })

    export default class MilestonesCard extends Vue {
        @Prop() compData!: RichTextImageBlock
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">
  /*Milestones Area*/
  .sq-milestones-area {
    width: 100%;
    overflow: hidden;
  }

  .sq-milestones {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media(min-width: 1441px) {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      min-height: 60vh;
    }
  }

  .sq-milestone-list {
    background: #F4F4F4;
    padding: 3rem;
    width: 100%;
    flex-grow: 1;
    @media(min-width: 1441px) {
      flex-grow: 1;
      padding: 7rem;
    }

    /deep/ ul {
      margin: 0;
      padding: 0;
      list-style: none;

      /deep/ li {
        list-style: disc;
        font-family: $font-roboto;
        font-size: 20px;

        &:not(:last-child) {
          margin-bottom: 2rem;
        }

        a {
          text-decoration: none;
          color: #5F5F5F;
          font-family: inherit;
          font-weight: 500;
          display: inline-block;
        }
      }
    }
  }

  .sq-milestone-image {
    flex-shrink: 0;
    width: 100%;
    height: 500px;
    @media(min-width: 1441px) {
      width: 800px;
      height: auto;
    }
  }
</style>
