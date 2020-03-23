<template>
  <div class="sq-about-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../../assets/images/about.jpg')"
                  banner-title="Who we are" banner-subtitle="SQUARE today symbolizes a name – a state of mind. But its journey to the
growth and prosperity has been no bed of roses."/>


    <div class="sq-about-main">
      <div class="container-fluid px-5-percent">


        <div class="s-about-col-areas">
          <div class="s-about-col image-col">
            <div class="s-about-col-content">
              <img src="../../assets/images/swwr@2x.jpg" alt="">
            </div>
          </div>
          <div class="s-about-col text-col">
            <div class="s-about-col-content text-col-content l-arrow">
              <h2>Who We are</h2>
              <p>We strive to go above and beyond for our clients, fostering a relationship built on
                trust,
                confidence</p>

              <router-link to="/about-details" tag="i" class="el-icon-plus"></router-link>

            </div>
          </div>
          <div class="s-about-col image-col">
            <div class="s-about-col-content">
              <img src="../../assets/images/mv@2x.jpg" alt="">
            </div>
          </div>
          <div class="s-about-col text-col">
            <div class="s-about-col-content text-col-content l-arrow">
              <h2>Mission, Vision & Values</h2>
              <p>We strive to go above and beyond for our clients, fostering a relationship built on
                trust,
                confidence</p>

              <i class="el-icon-plus"></i>

            </div>
          </div>
        </div>

        <div class="s-about-col-areas">
          <div class="s-about-col text-col">
            <div class="s-about-col-content text-col-content r-arrow">
              <h2>Achievements</h2>
              <p>We strive to go above and beyond for our clients, fostering a relationship built on
                trust,
                confidence</p>
              <router-link to="/philosophy" tag="i" class="el-icon-plus"></router-link>

            </div>
          </div>
          <div class="s-about-col image-col">
            <div class="s-about-col-content">
              <img class="" src="../../assets/images/philosopy@2x.jpg" alt="">
            </div>
          </div>
          <div class="s-about-col text-col">
            <div class="s-about-col-content text-col-content r-arrow">
              <h2>Management</h2>
              <p>We strive to go above and beyond for our clients, fostering a relationship built on
                trust,
                confidence</p>
              <i class="el-icon-plus"></i>

            </div>
          </div>
          <div class="s-about-col image-col">
            <div class="s-about-col-content">
              <img class="m-0" src="../../assets/images/achivements@2x.jpg" alt="square">

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
    import Navigation from '@/components/NavigationCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Footer from '@/components/FooterCard.vue';
    import Copyright from '@/components/CopyrightCard.vue';

    @Component({
        name: 'About',
        components: {Copyright, Footer, CommonBanner, Navigation},
    })

    export default class About extends Vue {

    }

</script>
<style scoped lang="scss">
  .sq-about-main {
    margin-bottom: 80px;
  }

  .s-about-col-areas {
    display: block;
    margin: 0 auto;
    overflow: hidden;

    &:after {
      content: "";
      clear: both;
      display: block;
    }
  }

  .s-about-col {
    @media(min-width: 961px) {
      width: calc(100% / 2);
      padding-bottom: calc(100% / 2);
    }

    @media(min-width: 1265px) {
      width: calc(100% / 4);
      float: left;
      position: relative;
      padding-bottom: calc(100% / 4);
    }

    width: calc(100%);
    float: left;
    position: relative;
    padding-bottom: calc(100%);

    .s-about-col-content {
      width: calc(100%);
      height: calc(100%);
      /*margin: 8px;*/
      /*padding: 16px;*/
      position: absolute;
      border-radius: 2px;
      background-color: $white-color;
      /*box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);*/
    }
  }

  .image-col {
    .s-about-col-content {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        -o-object-fit: cover;
      }
    }
  }

  .s-about-col-content i {
    position: absolute;
    left: 45px;
    bottom: 45px;
    font-size: 20px;
    line-height: 20px;
    color: #646464;
    border: 1px solid #646464;
    padding: 10px;
    cursor: pointer;
  }

  .text-col {

    .text-col-content {
      padding: 30% 45px 45px 45px;
      height: 100%;
      text-align: left;
      vertical-align: middle;

      h2 {
        font-family: $font-helvetica-bold;
        font-size: 22px;
        @media(min-width: 1905px) {
          font-size: 26px;
        }
      }

      p {
        font-family: $font-roboto;
        font-size: 14px;
        color: #656565;
        @media(min-width: 1905px) {
          font-size: 20px;
        }
      }
    }

    .text-col-content.l-arrow {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -25px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
        border-right: 25px solid $white-color;
        z-index: 2;
      }
    }

    .text-col-content.r-arrow {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        right: -25px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
        border-left: 25px solid $white-color;
        z-index: 2;
      }

    }
  }
</style>
