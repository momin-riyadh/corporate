<template>
  <section class="common-paragraph-area">
    <div class="container-fluid px-5-percent">
      <div class="row">
        <div class="col-xl-6 offset-xl-1 pt-4 pt-lg-0 float-left">

          <div class="article-header mb-5">
            <h1 class="common-title"><span>{{ParagraphTitle}}</span></h1>
            <p class="common-sub-title">{{ParagraphSubtitle}}</p>
          </div>

          <div class="res-article-content">
            <p v-for="paragraphcontent in ParagraphContents">
              {{ paragraphcontent }}
            </p>

            <!--        A common Generated button For whole Project-->
            <el-button-group>
              <el-button type="primary">Learn More</el-button>
              <el-button type="primary"><i class="el-icon-plus"></i></el-button>
            </el-button-group>
          </div>

        </div>
        <div class="col-10 col-sm-6 m-auto m-lg-0 col-lg-5 col-xl-5 csr-r-image float-right">
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
        @Prop() public ParagraphSubtitle!: string;
        @Prop() public ParagraphContents!: any;
        @Prop() public ParagraphImage!: string;
    }
</script>

<style scoped lang="scss">

  .common-paragraph-area{
    height: 600px;
    overflow: hidden;
    margin: 8rem 0;
  }

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

  .res-article-content {
    p {
      font-family: $font-roboto;
      color: #656565;
      font-size: 18px;
      text-transform: capitalize;
    }
  }

  .csr-r-image{
    img{
      height: 600px;
      width: auto;
      object-fit: cover;
      object-position: center;
    }
  }
</style>
