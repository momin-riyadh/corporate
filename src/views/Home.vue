<template>
  <div class="sq-home-area">
    <Navigation/>
    <FullpageAnimation/>

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
                  flows by their place far far away.
                </p>
              </div>
              <div class="col-12 col-md-6 sq-mission-text pl-3 pl-md-5">
                <h3>Our Vision</h3>
                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the
                  word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated
                  they live in Bookmarksgrove right at
                  the coast.
                </p>
              </div>
            </div>
            <div class="sq-mission-img col-12 p-0">
              <img src="../assets/images/mission-ref.jpg" alt="" class="img-fluid">
            </div>
          </div>
        </div>


      </div>
    </div>


    <div class="container-fluid px-5-percent overflow-hidden">
      <div class="sq-home-compliance-area">
        <img src="../assets/images/compliance.jpg" alt="" class="img-fluid">
        <div class="compliance-text">
          <h1 class="mb-3">Compliance</h1>
          <h4 class="mb-5">It's a team work.</h4>
          <p>
            Gaining an understanding of local markets is as important as monitoring the greater economy. We retain our
            core belief that residential property is more than just aestment, so we learn about the impact on local
            areas before investing.
          </p>
        </div>
      </div>
    </div>


    <!--Square home page bottom slider component for latest news views-->
    <div class="container-fluid px-5-percent sq-h-news-area">
      <div class="row position-relative">
        <div class="col-md-5 mx-auto">
          <div class="sq-h-news-header text-center">
            <h1>
              Latest News and Events
            </h1>
            <p>We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence
              and honesty. Maybe it’s our family orientation, but we think the most satisfying</p>
          </div>
        </div>

        <div class="col-1 position-absolute news-slider-nav">
          <div id="swiper-button-prev" class="swiper-button-prev" slot="button-prev"></div>
          <div id="swiper-button-next" class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>

      <div class="sq-h-slider-area mt-5 overflow-hidden">

        <swiper :options="swiperOption" :loadtheme="false">
          <!-- slides -->
          <swiper-slide>
            <div class="news-thumb-area">
              <img src="../assets/images/sl-one.jpg" alt="square">
              <div class="news-thumb-caption">
                <small class="news-thumb-date"> July 19, 2018 </small>
                <h4>We strive to go above and beyond for our clients foster go We strive to go</h4>
              </div>
            </div>

          </swiper-slide>
          <swiper-slide>
            <div class="news-thumb-area">
              <img src="../assets/images/sl-two.jpg" alt="square">
            </div>
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/sl-three.jpg" alt="square">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/sl-one.jpg" alt="square">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/sl-two.jpg" alt="square">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/sl-three.jpg" alt="square">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/sl-two.jpg" alt="square">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/sl-three.jpg" alt="square">
          </swiper-slide>

          <!-- Optional controls -->
          <!--        <div class="swiper-pagination" slot="pagination"></div>-->
          <!--        <div class="swiper-scrollbar" slot="scrollbar"></div>-->
        </swiper>
      </div>
    </div>
    <!--    End-->

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
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import FullpageAnimation from '@/components/FullpageAnimation.vue';

    @Component({
        name: 'Home',
        components: {
            FullpageAnimation,
            CommonBanner,
            Copyright,
            Footer,
            Navigation,
            swiper,
            swiperSlide,
        },
    })
    export default class Home extends Vue {

        public swiperOption: any = {
            slidesPerView: '3',
            spaceBetween: 30,
            mousewheel: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                nextEl: '#swiper-button-next',
                prevEl: '#swiper-button-prev',
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },

                600: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                // when window width is >= 640px
                1264: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },

                1904: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },

            },
        };

    }
</script>

<style lang="scss">

  .news-slider-nav{
    right:0;
    bottom:22px;
  }

  .sq-h-content-area {
    position: relative;
    height: 550px;
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
    padding: 30px;
    margin-bottom: calc(3% + 5vh);
    @media(min-width: 600px) {
      padding: 95px;
    }
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
        height: 0;
        border-bottom: 4px solid $brand-color;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        right: 100%;
        margin-right: 15px;
        @media(min-width: 600px) {
          width: 80px;
          height: 5px;
        }
      }
    }

    p {
      font-family: $font-helvetica-bold;
      font-size: calc(18px + (22 - 18) * ((100vw - 300px) / (1600 - 300)));
      color: #777777;
    }
  }

  .sq-mission-text {
    h3 {
      font-family: $font-roboto;
      font-weight: bold;
      color: $header-color;
    }

    p {
      font-family: $font-roboto;
      color: $paragraph-color;
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


  .sq-home-compliance-area {
    height: 70vh;
    position: relative;
    margin-bottom: calc(3% + 5vh);

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: top;
      -o-object-position: top;
    }
  }

  .compliance-text {
    background: #F9F8F8;
    padding: 5rem;
    left: 95px;
    bottom: -80px;
    width: 500px;
    position: absolute;
    z-index: 2;

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
        top: 55%;
        transform: translateY(-55%);
        width: 45px;
        right: 100%;
        margin-right: 5px;
      }
    }

    h4 {
      line-height: 1;
      font-family: $font-helvetica-bold;
      font-weight: bold;
      font-size: calc(20px + (26 - 20) * ((100vw - 300px) / (1600 - 300)));
      display: inline-block;
      position: relative;
    }

    p {
      font-family: $font-roboto;
      color: $paragraph-color;
      font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
    }
  }

  .sq-h-news-header {
    max-width: 400px;
    display: inline;

    h1 {
      font-family: $font-helvetica-bold;
      position: relative;
      font-size: calc(24px + (40 - 24) * ((100vw - 300px) / (1600 - 300)));
      margin-bottom: 20px;
      padding-bottom: 20px;

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 80px;
        height: 5px;
        background: $brand-color;
      }
    }

    p {
      font-family: $font-roboto;
      font-size: calc(15px + (15 - 13) * ((100vw - 300px) / (1600 - 300)));
      color: #6D6D6D;
    }
  }

  .sq-h-news-area {
    margin: 60px 0;
    @media(min-width: 1905px) {
      margin: 120px 0;
    }
  }


  .news-thumb-area {
    overflow: hidden;

    img {

    }
  }

  .news-thumb-caption {

  }
</style>
