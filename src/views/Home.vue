<template>
  <div class="sq-home-area">
    <Navigation/>
    <CommonBanner/>

    <div class="container-fluid px-5-percent">
      <div class="sq-h-content-area">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="sq-h-content">
              <h1 class="sq-h-content-title mb-4"> <span>Identifying Opportunities <br/>
              Creating Values</span></h1>
              <p>Gaining an understanding of local markets is as important as monitoring the greater economy. We retain
                our core belief that residential property is more than just an investment, so we learn about the impact
                on
                local areas before investing.</p>
            </div>
            <div class="sq-logo-bg">
              <img src="../assets/images/sq-logobg.svg" alt="square">
            </div>
          </div>
          <div class="col-md-6">
            <img src="../assets/images/h-top.jpg" alt="" class="img-fluid float-right">
          </div>
        </div>
      </div>
    </div>


    <div class="container-fluid px-5-percent my-5">
      <div class="sq-mission-area">
        <div class="sq-mission-title">
          <h1>Started its journey</h1>
          <p>in 1988 and in 1994</p>
        </div>

        <div class="row">
          <div class="col text-center">
            <div class="row text-left pt-4">
              <div class="col-12 col-md-6 mb-4 sq-mission-text pr-0 pr-md-5">
                <h3>Our Mission</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean. A small river named Duden
                  flows by their place far far away.</p>
              </div>
              <div class="col-12 col-md-6 sq-mission-text pl-0 pl-md-5">
                <h3>Our Vision</h3>
                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the
                  word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated
                  they live in Bookmarksgrove right at
                  the coast.</p>
              </div>
            </div>
            <div class="sq-mission-img col-12 p-0">
              <img src="../assets/images/mission@2x.jpg" alt="" class="img-fluid">
            </div>
          </div>
        </div>


      </div>
    </div>


    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '@/components/Navigation.vue';
    import Footer from '@/components/Footer.vue';
    import Copyright from '@/components/Copyright.vue';
    import CommonBanner from '@/components/CommonBanner.vue';

    @Component({
        name: 'Home',
        components: {
            CommonBanner,
            Copyright,
            Footer,
            Navigation,
        },
    })
    export default class Home extends Vue {
    }
</script>

<style lang="scss">
  .sq-h-content-area {
    position: relative;
    height: 50vh;
    overflow: hidden;
    margin: calc(3% + 5vh) 0;
  }

  .sq-h-content {
    p {
      margin-left: 150px;
      color: #696969;
      font-family: $font-roboto;
      max-width: 600px;
      line-height: 2em;
      position: relative;
      top: 80px
    }
  }

  .sq-h-content-title {
    line-height: 1.2;
    font-family: $font-helvetica-bold;
    font-weight: bold;
    font-size: calc(24px + (45 - 24) * ((100vw - 300px) / (1600 - 300)));
    margin-left: 95px;

    span {
      display: inline-block;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        height: 5px;
        border-bottom: 4px solid $brand-color;
        top: 30%;
        width: 80px;
        right: 100%;
        margin-right: 15px;
      }
    }
  }

  .sq-logo-bg {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-start;
    z-index: -1;
    bottom: 120px;
    position: relative;

    img {
      width: 400px;
      height: 400px;
    }
  }


  .sq-mission-area {
    background: #F4F4F4;
    padding: 95px;
    margin-bottom: calc(3% + 5vh);
  }

  .sq-mission-title {
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
        border-bottom: 4px solid $brand-color;
        top: 50%;
        transform: translateY(-50%);
        width: 80px;
        right: 100%;
        margin-right: 15px;
      }
    }

    p {
      font-family: $font-helvetica-bold;
      font-size: calc(18px + (22 - 18) * ((100vw - 300px) / (1600 - 300)));
      color: #777777;
    }
  }

  .sq-mission-text{
    h3{
      font-family: $font-roboto;
      font-weight: bold;
      color: $header-color;
    }
    p{
      font-family: $font-roboto;
      color:$paragraph-color;
      line-height: 1.8;

    }
  }

  .sq-mission-img {
    img {
      height: 55vh;
      width: 100%;
      object-fit: cover;
      -o-object-fit: cover;
      object-position: center;
      -o-object-position: center;
    }
  }
</style>
