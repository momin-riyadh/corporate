<template>
  <div class="container-fluid px-5-percent overflow-hidden">
    <div class="sq-home-compliance-area">
      <img src="../assets/images/compliance.jpg" alt="" class="img-fluid">
      <div class="compliance-text">
        <h1 class="mb-2 mb-md-3">Compliance</h1>
        <h4 class="mb-3 mb-md-4">It's a team work.</h4>
        <p>
          Gaining an understanding of local markets is as important as monitoring the greater economy. We retain our
          core belief that residential property is more than just aestment, so we learn about the impact on local
          areas before investing.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'ComplianceCard',
        components: {}
    })
    export default class ComplianceCard extends Vue {

    }
</script>

<style scoped lang="scss">
  .sq-home-compliance-area {
    height: 70vh;
    position: relative;
    margin-bottom: calc(3% + 5vh);

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: top;
      -o-object-position: top;
    }
  }

  .compliance-text {
    background: #F9F8F8;
    padding: 2rem;
    left: 2.5%;
    right: 2.5%;
    bottom: -80px;
    width: 95%;
    position: absolute;
    z-index: 2;
    @media(min-width: 800px) {
      left: 95px;
      max-width: 500px;
      padding: 5rem;
    }

    h1 {
      line-height: 1;
      font-family: $font-helvetica-bold;
      font-weight: bold;
      font-size: calc(24px + (45 - 24) * ((100vw - 300px) / (1600 - 300)));
      display: inline-block;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        height: 5px;
        border: 0;
        top: 55%;
        transform: translateY(-55%);
        width: 45px;
        right: 100%;
        margin-right: 5px;
        @media(min-width: 800px) {
          border-bottom: 4px solid $brand-color;
        }
      }
    }

    h4 {
      line-height: 1;
      font-family: $font-helvetica-bold;
      font-weight: bold;
      font-size: calc(20px + (26 - 20) * ((100vw - 300px) / (1600 - 300)));
      display: inline-block;
      position: relative;
    }

    p {
      font-family: $font-roboto;
      color: $paragraph-color;
      font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
    }
  }
</style>