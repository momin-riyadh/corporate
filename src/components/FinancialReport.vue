<template>
  <div class="financial-information-area">
    <!--    Financial Information Report Section Start-->
    <div class="container-fluid px-5-percent">
      <div class="financial-report">
        <!--    Annual Report Year-->
        <div class="text-center text-sm-left">
          <div class="financial-report-year">

            <!--Tab-->
            <div class="finance-report-tab">
              <ul>
                <li v-for="(item, index) in compData" :key="'m' + index" :class="{active: current===index}"
                    @click="itemClick(index)">
                  {{item.label}}
                </li>
              </ul>
            </div>
            <!-- Tab End -->


            <!--Data-->
            <div class="row">
              <div v-for="(item, index) in compData" v-show="current===index" :key="'g' + index"
                   class="financial-areas align-items-center">
                <div v-for="(imgitem, idx) in item.content" :key="'i' + idx" class="sq-financial-report">

                  <a href="" target="_blank">
                    <img class="img-fluid" :src="HOST + imgitem.image.original.src" alt="">

                    <div class="sq-f-report-caption text-center mt-3">
                      <h4>{{ imgitem.image.title }}</h4>
                    </div>
                  </a>

                </div>
              </div>
            </div>
            <!--Data End-->

          </div>
        </div>

      </div>

    </div>
    <!--    End Financial Information Report Section-->
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {TimelineMax} from 'gsap/all';
    import ScrollMagic from 'scrollmagic';
    import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
    import {ReportTabBlock} from '@/store/cms.types';
    import {HOST} from '@/global';


    @Component({
        name: 'FinancialReport',
        components: {},
    })
    export default class FinancialReport extends Vue {
        @Prop() compData!: ReportTabBlock;
        HOST: string = HOST;
        current = 0;
        current_image_number = 0;

        // current_img = 0;


        financeScroll() {
            const timelines = new TimelineMax({});
            timelines.staggerFromTo('.sq-financial-report', 1, {yPercent: 100, opacity: 0}, {
                yPercent: 0,
                opacity: 1
            }, '0.1');

            timelines.staggerFromTo('.sq-milestone-list', 1, {xPercent: -100, opacity: 0}, {
                xPercent: 0,
                opacity: 1
            }, '0.1');

            timelines.staggerFromTo('.sq-milestone-image', 1, {xPercent: +100, opacity: 0}, {
                xPercent: 0,
                opacity: 1
            }, '0.1');

            let controller = new ScrollMagic.Controller();
            let scene: any = new ScrollMagic.Scene({
                triggerElement: '.financial-report-year',
                reverse: false,
                triggerHook: 'onCenter'
            })
                .setTween(timelines)
                .addTo(controller);
        }

        public mounted() {
            this.financeScroll()
        }

        itemClick(index: any) {
            if ((this as any).current == index) {
                (this as any).current = 0
            } else {
                (this as any).current = index
            }
        }

    }
</script>

<style scoped lang="scss">
  .financial-report-year {
    margin: 0 0 50px 0;
  }

  /*Report Tab*/
  .finance-report-tab {
    margin-bottom: 3rem;
    display: block;
    width: 100%;
    overflow: hidden;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      border-radius: 5px;
      width: 100%;
    }

    li {
      transition: all 0.3s ease-in-out;
      float: left;
      display: inline-block;
      cursor: pointer;
      padding: 0.9rem 1.3rem;
      color: #212529;
      background: #efefef;
      font-family: $font-roboto;
      font-weight: 500;
      border-bottom: 4px solid transparent;
    }

    li.active {
      border-bottom: 4px solid $brand-color;
      color: $brand-color;
    }

  }


  .financial-areas {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin: 0 auto;
  }

  .sq-financial-report {
    /*flex: 1 1 auto;*/
    a {
      text-decoration: none;
      color: inherit;

      img {
        border: 0.9rem solid #efefef;
      }
    }
  }

  .sq-f-report-caption {
    h4 {
      font-family: $font-roboto;
      text-transform: capitalize;
      font-size: 1.1rem;
    }
  }

  .sq-financial-report {
    width: calc(100% - 30px);
    margin: 0 15px 30px 15px;
    flex-shrink: 0;
    align-self: flex-start;
    @media (min-width: 600px) {
      width: calc(50% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 960px) {
      width: calc(33.3333% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 1265px) {
      width: calc(25% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 1905px) {
      width: calc(20% - 30px);
      margin: 0 15px 30px;
    }
  }

  .sq-milestones-area {
    width: 100%;
    overflow: hidden;
  }
</style>
