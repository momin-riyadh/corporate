<template>
  <div class="home-page-animation-area">
    <div class="home-page-animation">
      <img src="../assets/images/h-banner.jpg" alt="">
      <div class="home-page-animation-caption">
        <h1>Square Pharmaceuticals LTD</h1>
        <p>Largest pharmaceutical company in Bangladesh</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'FullpageAnimation',
        components: {}
    })
    export default class FullpageAnimation extends Vue {
          
    }
</script>

<style scoped lang="scss">
    .home-page-animation{
      position: relative;
      height: calc(100vh - 100px);
      &::before {
        width: 100%;
        height: 100%;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 0%);
        z-index: 2;
      }
      img{
        object-fit: cover;
        width: 100%;
        height:100%;
        object-position: center center;
        position: relative;

      }
    }
  .home-page-animation-caption{
    z-index: 3;
    position: absolute;
    left:5%;
    bottom:15%;
    h1{
      font-family: $font-helvetica-bold;
      color:$white-color;
      font-size: calc(24px + (55 - 24) * ((100vw - 300px) / (1600 - 300)));
    }
    p{
      color:$white-color;
      font-size: calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
    }
  }
</style>