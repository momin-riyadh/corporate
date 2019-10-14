<template>
  <section class="my-5 py-5">
    <div class="container-fluid px-5-percent">
      <div class="row">
        <div class="col-12 col-lg-6 offset-lg-1 pt-4 pt-lg-0 float-left">

          <div class="article-header mb-5">
            <h1 class="common-title"><span>{{ParagraphTitle}}</span></h1>
            <p class="common-sub-title">{{ParagraphSubTitle}}</p>
          </div>

          <div class="article-content">
            <p>{{ParagraphContent}}</p>

            <!--        A common Generated button For whole Project-->
            <el-button-group>
              <el-button type="primary">Learn More</el-button>
              <el-button type="primary"><i class="el-icon-plus"></i></el-button>
            </el-button-group>
          </div>

        </div>
        <div class="col-10 col-sm-6 m-auto m-lg-0 col-lg-5">
          <img alt="image" class="img-fluid" :src="ParagraphImage">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component({
        name: 'CommonParagraph',
        components: {},
    })
    export default class CommonParagraph extends Vue {
        @Prop() public ParagraphTitle!: string;
        @Prop() public ParagraphSubTitle!: string;
        @Prop() public ParagraphContent!: string;
        @Prop() public ParagraphImage!: string;
    }
</script>

<style scoped lang="scss">


  .common-sub-title {
    font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));
    color: #292929;
    font-weight: bold;
    font-family: $font-roboto;
  }

  .common-title {
    line-height: 1;
    color: $brand-color;
    font-family: $font-helvetica;
    font-weight: bold;
    font-size: calc(24px + (42 - 24) * ((100vw - 300px) / (1600 - 300)));
  }

  .common-title span {
    display: inline-block;
    position: relative;
  }

  .common-title span:before {
    content: "";
    position: absolute;
    height: 5px;
    border-bottom: 4px solid $brand-color;
    top: 50%;
    width: 80px;
  }

  .common-title span:before {
    right: 100%;
    margin-right: 15px;
  }

  .article-content {
    p {
      font-family: $font-roboto;
      color: #656565;
      font-size: 18px;
    }
  }
</style>
