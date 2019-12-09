<template>
  <div class="mp-content-area ml-0 ml-md-5">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-6 col-xl-8">
        <div class="mp-content">
          <h1>Samson H Chowdhury</h1>
          <p>Samson H Chowdhury was born on 25 September, 1925. After completing education in India he returned to the then East Pakistan and settled at Ataikula village in Pabna district where his father was working as a Medical Officer in an outdoor dispensary. In 1952, he started a small pharmacy in Ataikula village which is about 160 km off capital Dhaka in the north-west part of Bangladesh. Mr. Samson H Chowdhury then ventured into a partnership pharmaceutical company with three of his friends in 1958. When asked why the name SQUARE was chosen he remembers - “We named it SQUARE because it was started by four friends and also because it signifies accuracy and perfection meaning quality” as they committed in manufacturing quality products.</p>
        </div>
      </div>
      <div class="col-12 m-auto ml-lg-auto mr-lg-0 col-lg-4 pt-5 pt-lg-0">
        <div class="mp-image">
          <img alt="image" class="img-fluid" src="../../assets/images/chairman@2x.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'ManagementProfile',
        components: {},
    })

    export default class ManagementProfile extends Vue {

    }
</script>

<style scoped lang="scss">
  .mp-content-area {
    min-height: 500px;
    overflow: hidden;
  }

  .mp-content {
    width: 100%;

    h1 {
      font-family: $font-roboto;
      font-size: 2rem;
      color: $brand-color;
      margin-bottom: 1.5rem;
      line-height: 1;
      @media all and (min-width: 1265px) {
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

  .mp-image {
    img {
      width: 100%;
      height: 550px;
      object-fit: cover;
      object-position: center;
      -o-object-fit: cover;
    }
  }
</style>