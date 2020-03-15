<template>
  <div class="sq-c-b-area">
    <div class="container-fluid px-5-percent">
      <div class="row">
        <div class="col-xl-6 py-4 pt-lg-0 float-left c-pl">
          <div class="sq-bdp-header mb-2 mb-md-5">
            <h1 class="sq-bdp-title">
              <span>looking beyond horizon</span>
            </h1>
            <p class="sq-bdp-sub-title">
              Leading pharmaceutical industry of Bangladesh
            </p>
          </div>

          <!--bdp = business development page-->
          <div class="sq-bdp-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at autem culpa delectus, dolores ducimus,
              facere, magnam natus neque nisi non perspiciatis repudiandae sapiente temporibus unde! Et ipsum
              laboriosam, optio perferendis quaerat quidem totam voluptatem. Corporis dolores eaque nam porro quod
              repellendus, sed soluta sunt.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid cum dignissimos doloribus et iste
              perferendis quaerat? Accusamus aliquam animi cum eos expedita in natus nemo quam quasi sunt.
              Molestiae.</p>
          </div>
        </div>
        <div class="col-12 m-auto m-lg-0 col-xl-6 bdp-r-image float-right">
          <img alt="square" class="img-fluid" :src="require('../assets/images/pharma.jpg')">
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import CommonParagraph from '@/components/CommonParagraph.vue';

    @Component({
        name: 'CommonBusiness',
        components: {CommonParagraph}
    })
    export default class CommonBusiness extends Vue {

    }
</script>

<style scoped lang="scss">
  .sq-c-b-area {
    min-height: 600px;
    overflow: hidden;
    margin: 3rem 0;
    @media(min-width: 961px) {
      margin: 8rem 0;
    }
  }

  .sq-bdp-sub-title {
    font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));
    color: #292929;
    font-weight: bold;
    font-family: $font-roboto;
  }

  .sq-bdp-title {
    line-height: 1;
    margin-bottom: 1.2rem;
    color: $brand-color;
    font-family: $font-helvetica;
    font-weight: bold;
    font-size: calc(24px + (42 - 24) * ((100vw - 300px) / (1600 - 300)));
  }

  .sq-bdp-title span {
    display: inline-block;
    position: relative;
  }

  .sq-bdp-title span:before {
    @media(min-width: 1265px) {
      content: "";
      position: absolute;
      height: 5px;
      border-bottom: 4px solid $brand-color;
      top: 50%;
      width: 80px;
    }
    border: 0;
  }

  .sq-bdp-title span:before {
    right: 100%;
    margin-right: 15px;
  }

  .sq-bdp-content {
    /*text-overflow: ellipsis;*/
    /*display: -webkit-box;*/
    /*-webkit-line-clamp: 5; !* number of lines to show *!*/
    /*-webkit-box-orient: vertical;*/
    p {
      font-family: $font-roboto;
      color: #656565;
      font-size: 18px;
      text-transform: capitalize;
      line-height: 2em;
      max-height: 400px;
      overflow: hidden;
    }
  }

  .c-pl {
    padding-left: 3%;
    @media(min-width: 1265px) {
      padding-left: 115px;
    }
  }

</style>