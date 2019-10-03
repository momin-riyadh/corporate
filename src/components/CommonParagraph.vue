<template>
  <section class="my-5 py-5">
    <div class="container-fluid px-5-percent">
      <div class="row">
        <div class="col-12 col-lg-6 offset-lg-1 pt-4 pt-lg-0">

          <div class="article-header mb-5">
            <h1 class="common-title"><span>Looking beyond the horizon</span></h1>
            <p class="common-sub-title">Leading pharmaceutical industry of Bangladesh</p>
          </div>

          <div class="article-content">
            <p>In a world in which environmental and social responsibility have become serious concerns, all
              manufacturers
              need to understand the environmental impact of heir products. Life cycle assessments (LCAs), which
              evaluate
              the environmental impact of the product from the production of raw materials through to final disposal,
              have
              been performed for all categories of absorbent hygiene products. Across all categories, product
              improvements
              in recent decades did not only lead</p>

            <p> To better performance and improved skin health, but also have resulted in reduced weight of both
              products
              and packaging, resulting in substantially reduced environmental impact compared to typical disposable
              products of the 1980s (EDANA sustainability report, 2007).</p>

            <p> Respect the environment, making rational use of natural resources and taking steps to prevent pollution
              from the different processes involved in our industrial operations. Promote the sustainable use of raw
              materials and natural resources. Introduce guidelines for continuously improving our environmental
              performance. Introduce guidelines for continuous improvement in their environmental performance. Comply
              with
              the legislation in force on environmental protection, as well as with other voluntarily accepted
              commitments.</p>
          </div>

        </div>
        <div class="col-10 col-sm-6 m-auto m-lg-0 col-lg-5">
          <img alt="image" class="img-fluid" src="../assets/images/csr.jpg">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'CommonParagraph',
        components: {},
    })
    export default class CommonParagraph extends Vue {

    }
</script>

<style scoped lang="scss">


  .common-sub-title{
    font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));
    color:#292929;
    font-weight: bold;
    font-family: $font-roboto;
  }
  .common-title {
    line-height: 1;
    color:$brand-color;
    font-family: $font-roboto;
    font-weight: bold;
    font-size: calc(24px + (42 - 24) * ((100vw - 300px) / (1600 - 300)));
  }

  .common-title span {
    display: inline-block;
    position: relative;
  }
  .common-title span:before
  {
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
  .article-content{
    p{
      font-family: $font-roboto;
      color:#656565;
      font-size: 18px;
    }
  }
</style>