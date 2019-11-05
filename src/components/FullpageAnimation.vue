<template>
  <div class="home-page-animation-area">
    <div class="home-page-animation">
      <img src="../assets/images/h-banner.jpg" alt="">
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
      height: calc(100vh - 100px);
      img{
        object-fit: cover;
        width: 100%;
        height:100%;
        object-position: center center;
        position: relative;
      }
    }
</style>