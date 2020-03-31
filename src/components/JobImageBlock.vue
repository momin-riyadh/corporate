<template>
  <!--    Bottom Image Grid-->
  <div class="container-fluid px-5-percent">
    <div class="bottom-image-grid my-5">
      <div class="first-row">
        <img src="../assets/images/grid-one@2x.jpg" alt="square-group" class="img-fluid">
        <img src="../assets/images/grid-two@2x.jpg" alt="square-group" class="img-fluid">
      </div>
      <div class="second-row">
        <img src="../assets/images/grid-three@2x.jpg" alt="square-group" class="img-fluid">
        <img src="../assets/images/grid-four@2x.jpg" alt="square-group" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'JobImageBlock',
        components: {

        }
    })
    export default class JobImageBlock extends Vue {

    }
</script>

<style scoped lang="scss">
  .bottom-image-grid {

    .first-row {
      display: flex;
      height: 40vh;
      width: 100%;

      img:first-child {
        flex-grow: 1;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 70%;
        }
      }

      img:last-child {
        flex-shrink: 0;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 30%;
        }
      }
    }

    .second-row {
      display: flex;
      height: 40vh;
      width: 100%;

      img:first-child {
        flex-shrink: 0;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 30%;
        }
      }

      img:last-child {
        flex-grow: 1;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 70%;
        }
      }
    }
  }
</style>