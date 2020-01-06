<template>
  <div class="achievements-content-area ml-0 ml-md-5">
    <div class="slider-cont">
      <swiper :options="swiperOption">

        <swiper-slide class="swiper-slide">
          <div class="d-flex">
            <div class="col-6">
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
                    1212334
                  </span>
                </div>

              </div>
            </div>
            <div class="col-6">
              <div class="slider-image">
                <img src="../../assets/images/ach_one.jpg" alt="square_group"/>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="swiper-slide">
          <div class="d-flex">
            <div class="col-6">
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
            <div class="col-6">
              <div class="slider-image">
                <img src="../../assets/images/ach_two.jpg" alt="square_group"/>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="swiper-slide">
          <div class="d-flex">
            <div class="col-6">
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
            <div class="col-6">
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
    import "swiper/dist/css/swiper.css";
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
  .achievements-content-area {
    overflow: hidden;
  }
  .slider-cont{
    max-height: 70vh;
  }
  .slider-image{
    height:100%;
    width: auto;
    img{
      object-fit: cover;
      width: 100%;
      height:auto;
    }
  }

</style>