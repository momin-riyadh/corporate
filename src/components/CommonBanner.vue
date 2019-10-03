<template>
  <div class="common-banner-area">
    <div class="container-fluid px-5-percent">
      <div class="common-banner">
        <img class="img-fluid" src="../assets/images/wwr@2x.jpg" alt="square">


        <div class="banner-content">
          <h1>Who We are</h1>
          <p>SQUARE today symbolizes a name – a state of mind. But its journey to the
            growth and prosperity has been no bed of roses.
          </p>
        </div>


      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component({
        name: 'CommonBanner',
        components: {},
    })
    export default class CommonBanner extends Vue {

    }
</script>

<style scoped lang="scss">
  .common-banner-area {
    height: 50vh;
    width: 100%;
    display: block;
    overflow: hidden;
    margin-bottom: 30px;
  }

  .common-banner {
    position: relative;
    width: 100%;
    height: 50vh;

    &::before {
      width: 100%;
      height: 100%;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 100%, rgba(0, 0, 0, 0.2) 0%);
    }

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
      -o-object-fit: cover;
    }
  }

  .banner-content {
    color: $white-color;
    text-align: center;
    max-width: 800px;
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    h1 {
      font-size: calc(20px + (70 - 20) * ((100vw - 300px) / (1600 - 300)));
      text-transform: capitalize;
    }

    p {
      font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
    }
  }
</style>