<template>
  <div class="achievements-content-area ml-0 ml-md-5">
    <div class="slider-cont">
      <swiper :options="swiperOption">

        <swiper-slide class="swiper-slide">
          <div class="d-flex">
            <div class="col-6 p-0">
              <div class="sq-t-text-wrap">
                <div class="sq-t-text-desc">
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
                <div class="sq-award-desc">
                  <h3>
                    Awards Winning Brands
                  </h3>
                  <p>
                    programs and team-building ctivitiesroughout the year
                  </p>
                  <span class="sq-award-date">
                    12 / 12 / 2003
                  </span>
                </div>

              </div>
            </div>
            <div class="col-6 p-0 pb-5">
              <div class="slider-image">
                <img src="../../assets/images/ach_one.jpg" alt="square_group"/>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="swiper-slide">
          <div class="d-flex">
            <div class="col-6 p-0">
              <div class="sq-t-text-wrap">
                <div class="sq-t-text-desc">
                  <p>We striveWe’re proud that we’re a 100% women-owned business certified by
                    the Women’s Business Development Center (WBDC). We’re also proud that we put people first, with
                    monthly
                    reward programs and team-building ctivitiesroughout the year. We strive to go above and beyond for
                    our
                    clients, fostering</p>
                </div>
                <div class="sq-award-desc">
                  <h3>
                    Wadasdasd o go above and beyond for our clients
                  </h3>
                  <p>
                    programs and team-building ctivitiesroughout the year
                  </p>
                  <span class="sq-award-date">
                    12 / 12 / 2019
                  </span>
                </div>

              </div>
            </div>
            <div class="col-6 p-0 pb-5">
              <div class="slider-image">
                <img src="../../assets/images/ach_two.jpg" alt="square_group"/>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="swiper-slide">
          <div class="d-flex">
            <div class="col-6 p-0">
              <div class="sq-t-text-wrap">
                <div class="sq-t-text-desc">
                  <p>We striveWe’re proud that we’re a 100% women-owned business certified by
                    the Women’s Business Development Center (WBDC). We’re also proud that we put people first, with
                    monthly
                    reward programs and team-building ctivitiesroughout the year. We strive to go above and beyond for
                    our
                    clients, fostering</p>
                </div>
                <div class="sq-award-desc">
                  <h3>
                    Bangladesh Brand Forum Awards
                  </h3>
                  <p>
                    programs and team-building ctivitiesroughout the year
                  </p>
                  <span class="sq-award-date">
                                        12 / 12 / 2018
                                    </span>
                </div>

              </div>
            </div>
            <div class="col-6 p-0 pb-5">
              <div class="slider-image">
                <img src="../../assets/images/ach_three.jpg" alt="square_group"/>
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
        };
    }
</script>

<style scoped lang="scss">
  .achievements-content-area {
    overflow: hidden;
  }

  .slider-image {
    height: 70vh;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .sq-t-text-desc {
    height: 250px;
  }

  .sq-award-desc {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: $brand-color;
    padding: 2rem;
    color: #ffffff;
    margin-bottom: -50px;

    h3 {
      color: #ffffff;
      font-size: 36px;
      font-weight: $font-helvetica-bold;
    }

    p {
      font-family: $font-roboto;
      font-size: 22px;
      text-transform: capitalize;
    }
  }

  .sq-t-text-desc {
    p {
      font-size: 18px;
      line-height: 1.8em;
      padding-right: 50px;
    }
  }





</style>