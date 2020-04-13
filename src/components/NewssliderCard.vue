<template>
  <!--Square home page bottom slider component for latest news views-->
  <div class="sq-h-news-area">
    <div class="row position-relative">
      <div class="col-md-5 mx-auto">
        <div class="sq-h-news-header text-center">
          <h1>{{compData.title}}</h1>
          <p>{{compData.subtitle}}</p>
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
        <swiper-slide v-for="(slider, idx) in compData.contents" :key="'slide' + idx">
          <div class="news-thumb-area">
            <div class="news-thumb-image">
              <img v-if="slider.banner!=null" :src="HOST + slider.banner.src" :alt="slider.title"/>
              <router-link :to="slider.link" class="sq-h-news-link">
                <i class="el-icon-plus"></i>
              </router-link>
            </div>

            <div class="news-thumb-caption">
              <small class="news-thumb-date">
                {{new Date(slider.created_at) | moment("MMM dd, YYYY")}}
              </small>
              <h4>{{slider.title}}</h4>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!--    End-->
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import {swiper, swiperSlide} from "vue-awesome-swiper";
    import {TitleSubtitleNewslistBlock} from "@/store/cms.types";
    import {HOST} from "@/global";

    @Component({
        name: "NewssliderCard",
        components: {
            swiper,
            swiperSlide
        }
    })
    export default class NewssliderCard extends Vue {
        @Prop() compData!: TitleSubtitleNewslistBlock;
        HOST: string = HOST;

        public swiperOption: any = {
            slidesPerView: "4",
            spaceBetween: 30,
            mousewheel: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: "#swiper-button-next",
                prevEl: "#swiper-button-prev"
            },
            breakpoints: {
                1905: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                1439: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                1265: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                601: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        };
    }
</script>

<style scoped lang="scss">
  .sq-h-news-header {
    max-width: 900px;
    padding: 0 5%;
    display: inline-block;
    margin-bottom: 40px;
    @media (min-width: 601px) {
      margin-bottom: auto;
    }

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
      color: #6d6d6d;
    }
  }

  .sq-h-news-area {
    overflow: hidden;
    margin: 60px 0;
    @media (min-width: 1905px) {
      margin: 120px 0;
    }
  }

  /*Swiper*/
  .news-slider-nav {
    right: 42%;
    transform: translateX(50%);
    bottom: 0;
    display: inline-block;
    @media (min-width: 601px) {
      right: 5%;
      transform: translateX(0);
      bottom: 2.5rem;
    }
  }

  .sq-h-slider-area {
    overflow: hidden;
    margin-left: 5%;
  }

  .swiper-slide {
    overflow: hidden;
  }

  .news-thumb-area {
    overflow: hidden;
    background: #f9f8f8;
  }

  .news-thumb-image {
    position: relative;
  }

  .sq-h-news-link {
    position: absolute;
    right: 0;
    bottom: 0;

    i {
      background: $brand-color;
      padding: 1.2rem;
      color: #fff;
      font-size: 1.4rem;
    }
  }

  .news-thumb-caption {
    padding: 1rem;

    h4 {
      font-family: $font-helvetica-bold;
      color: #292929;
      font-size: 22px;
    }

    small {
      font-family: $font-roboto;
      font-size: 0.9rem;
      color: #696969;
    }
  }
</style>
