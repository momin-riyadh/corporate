<template>
  <div class="history-content-area ml-0 ml-md-5">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-6 col-xl-5">
        <div class="history-content">
          <h1>History of Square Group</h1>
          <p>We strive to go above and beyond for our clients, fostering relationship built on trust, confidence and
            honesty. Maybe it’s our family orientation, but we think the most satisfying part of what we do is that we
            get to work with so many wonderful people. We’re proud that we’re a 100% women-owned business certified by
            the Women’s Business Development Center (WBDC). We’re also proud that we put people first, with monthly
            reward programs and team-building ctivitiesroughout the year. We strive to go above and beyond for our
            clients, fostering</p>

        </div>
      </div>
      <div class="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
        <div class="history-image">
          <img alt="image" class="img-fluid" src="../../assets/images/history@2x.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'HistoryPage',
        components: {},
    })
    export default class HistoryPage extends Vue {

    }
</script>

<style scoped lang="scss">
  .history-content-area {
    max-height: 500px;
    overflow: hidden;
  }
  .history-content{
    width: 100%;
    h1{
      font-family: $font-roboto;
      font-size: 2rem;
      color: $brand-color;
      margin-bottom: 1.5rem;
      line-height: 1;
      @media all and (min-width:1265px) {
        font-size: 3.5rem;
      }
    }
    p{
      color: #656565;
      font-size: 1.1rem;
      line-height: 1.8rem;
      text-align: justify;
      font-family: $font-roboto;
    }
  }

  .history-image{
    img{
      width: 100%;
      height: auto;
      object-fit: cover;
      -o-object-fit: cover;
    }
  }
</style>