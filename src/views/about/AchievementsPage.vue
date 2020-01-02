<template>
  <div class="achievements-content-area ml-0 ml-md-5">
    <div class="slider-cont">
      <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide">

          <div class="row mx-0">
            <div class="col-xl-6 p-0">
              <div class="text-wrap">
                <div class="text-desc">
                  <p>We strive to go above and beyond for our clients, fostering relationship built on trust, confidence
                    and
                    honesty. Maybe it’s our family orientation, but we think the most satisfying part of what we do is
                    that we
                    get to work with so many wonderful people. We’re proud that we’re a 100% women-owned business
                    certified by
                    the Women’s Business Development Center (WBDC). We’re also proud that we put people first, with
                    monthly
                    reward programs and team-building ctivitiesroughout the year. We strive to go above and beyond for
                    our
                    clients, fostering</p>
                </div>
                <div class="txtcolor-card">
                  <h3>
                    We strive to go above and beyond for our clients
                  </h3>
                  <p>
                    programs and team-building ctivitiesroughout the year
                  </p>
                  <span class="date">
                                        1212121
                                    </span>
                </div>

              </div>
            </div>
            <div class="col-xl-6 p-0">
              <div class="slider-image">
                <img src="../../assets/images/about.jpg" alt="square"/>
              </div>
            </div>
          </div>

        </swiper-slide>

        <!--        Slider 3-->
        <swiper-slide class="swiper-slide">

          <div class="row mx-0">
            <div class="col-xl-6 p-0">
              <div class="text-wrap">
                <div class="text-desc">
                  <p>We striveWe’re proud that we’re a 100% women-owned business certified by
                    the Women’s Business Development Center (WBDC). We’re also proud that we put people first, with
                    monthly
                    reward programs and team-building ctivitiesroughout the year. We strive to go above and beyond for
                    our
                    clients, fostering</p>
                </div>
                <div class="txtcolor-card">
                  <h3>
                    Wadasdasd o go above and beyond for our clients
                  </h3>
                  <p>
                    programs and team-building ctivitiesroughout the year
                  </p>
                  <span class="date">
                                        1212121
                                    </span>
                </div>

              </div>
            </div>
            <div class="col-xl-6 p-0">
              <div class="slider-image">
                <img src="../../assets/images/news-five.jpg" alt="square"/>
              </div>
            </div>
          </div>

        </swiper-slide>
        <swiper-slide class="swiper-slide">

          <div class="row mx-0">
            <div class="col-xl-6 p-0">
              <div class="text-wrap">
                <div class="text-desc">
                  <p>We striveWe’re proud that we’re a 100% women-owned business certified by
                    the Women’s Business Development Center (WBDC). We’re also proud that we put people first, with
                    monthly
                    reward programs and team-building ctivitiesroughout the year. We strive to go above and beyond for
                    our
                    clients, fostering</p>
                </div>
                <div class="txtcolor-card">
                  <h3>
                    Wadasdasd o go above and beyond for our clients
                  </h3>
                  <p>
                    programs and team-building ctivitiesroughout the year
                  </p>
                  <span class="date">
                                        1212121
                                    </span>
                </div>

              </div>
            </div>
            <div class="col-xl-6 p-0">
              <div class="slider-image">
                <img src="../../assets/images/news-five.jpg" alt="square"/>
              </div>
            </div>
          </div>

        </swiper-slide>

        <div id="home-pagination" class="swiper-pagination" slot="pagination">1</div>

      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    // import "swiper/dist/css/swiper.css";
    import {swiper, swiperSlide} from 'vue-awesome-swiper';

    @Component({
        name: 'AchievementPage',
        components: {
            swiper,
            swiperSlide
        },
    })
    export default class AchievementPage extends Vue {
        slideidx = ['1', '2', '3'];
        public swiperOption: any = {
            spaceBetween: 30,
            centeredSlides: false,
            grabCursor: false,
            effect: "fade",
            speed: 1100,
            loop: true,
            direction: "horizontal",
            navigation: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet(index: any, className: any) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            // paginationBulletRender(index: number, className: any) {
            //     return '<span class="' + className + '">' + (index + 1) + '</span>';
            // }
            // navigation: {
            //   nextEl: "#js-next1",
            //   prevEl: "#js-prev1"
            // }
        };
    }
</script>

<style scoped lang="scss">
  .slider-image {
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 50% !important;
    width: 30% !important;
  }

  .swiper-pagination-bullet-active {
    opacity: 1 !important;
    background: none !important;
    display: inline-block !important;
    outline: none !important;
    position: relative !important;
    margin-right: 50px !important;

    &::before {
      position: absolute;
      width: 100px;
      height: 2px;
      content: '';
      left: 0;
      top: 0;
      background: red;
    }
  }

  .swiper-pagination-bullet {
    width: 100px !important;
    height: auto !important;
    display: unset !important;
    border-radius: unset !important;
    background: none !important;
    opacity: 1 !important;
    text-align: left !important;
  }

</style>