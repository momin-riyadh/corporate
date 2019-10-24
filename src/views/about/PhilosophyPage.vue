<template>
  <div class="philosophy-content-area ml-0 ml-md-5">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-6 col-xl-5">
        <div class="philosophy-content">
          <h1>Global Scale Structure</h1>
          <p>Our Business Motivation is Being Good by Doing Well and to conduct transparent business operations based on market  mechanism within the legal, ethical & social framework with aims to attain the mission reflected by our vision. We scale-up CSR activities to consider the interests of our external & internal stakeholders like customers, employees, vendors, shareholders, society, government etc. and ecological & ethical considerations in all aspects of operations. SQUARE is one of the pioneer signatories of United Nations Global Compact (UNGC) in Bangladesh. UNGC principles are aligned.</p>
        </div>
      </div>
      <div class="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
        <div class="philosophy-image">
          <img alt="image" class="img-fluid" src="../../assets/images/philosophy@2x.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'PhilosophyPage',
        components: {},
    })

    export default class PhilosophyPage extends Vue {

    }
</script>

<style scoped lang="scss">
  .philosophy-content-area {
    max-height: 500px;
    overflow: hidden;
  }

  .philosophy-content {
    width: 100%;

    h1 {
      font-family: $font-roboto;
      font-size: 2rem;
      color: $brand-color;
      margin-bottom: 1.5rem;
      line-height: 1;
      @media all and (min-width: 1264px) {
        font-size: 3.5rem;
      }
    }

    p {
      color: #656565;
      font-size: 1.1rem;
      line-height: 1.8rem;
      text-align: justify;
      font-family: $font-roboto;

    }
  }

  .philosophy-image {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      -o-object-fit: cover;
    }
  }
</style>