<template>
  <div class="bottom-banner-area">
    <div class="container-fluid px-5-percent">
      <div class="bottom-banner">
        <img class="img-fluid" :src="BottomImage" alt="">
        <div class="col-md-6 mx-auto bottom-banner-text text-center">
          <h1>
            {{BottomTitle}}
          </h1>
        </div>


        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="bottom-paragraph-text text-center">
              <p>{{BottomText}}</p>
            </div>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script lang="ts">

    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component({
        name: 'BottomBanner',
        components: {},
    })

    export default class BottomBanner extends Vue {
        @Prop() public BottomTitle!: string;
        @Prop() public BottomText!: string;
        @Prop() public BottomImage!: string;
    }
</script>

<style scoped lang="scss">
  .bottom-banner-area {

  }

  .bottom-banner {
    position: relative;
    height: 50vh;
    display: block;
    margin-bottom:250px;
    &::before{
      width: 100%;
      height: 100%;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: -webkit-gradient(linear, left top, left bottom, color-stop(100%, rgba(0, 0, 0, 0.3)), color-stop(0%, rgba(0, 0, 0, 0.3)));
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 0%);
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .bottom-banner-text {
    position: absolute;
    left: 50%;
    top: 40%;
    -webkit-transform: translate(-50%, -60%);
    -moz-transform: translate(-50%, -60%);
    -ms-transform: translate(-50%, -60%);
    -o-transform: translate(-50%, -60%);
    transform: translate(-50%, -60%);

    h1 {
      color: $white-color;
      font-size: calc(16px + (50 - 16) * ((100vw - 300px) / (1600 - 300)));;
    }

  }

  .bottom-paragraph-text {
    margin-top: -100px;
    background: #F4F4F4;
    padding: 4rem;
    color: $paragraph-color;
    font-size: $paragraph-size;
    p{
      font-family: $font-roboto;
      line-height: 2em;
    }
  }
</style>