<template>
  <div class="financial-information-area">
    <!--    Financial Information Report Section Start-->
    <div class="container-fluid px-5-percent">
      <div class="financial-report">
        <!--    Annual Report Year-->
        <div class="text-center text-sm-left">
          <div class="financial-report-year">

            <!--            Tab-->
            <div class="finance-report-tab">
              <ul>
                <li v-for="(item, index) in compData.tab" :key="'m' + index" :class="{active: current===index}"
                    @click="itemClick(index)">
                  {{item.value.label}}
                </li>
              </ul>
            </div>
            <!-- Tab End -->


            <!--Data-->
            <div class="financial-report-file">

              <div v-for="(item, index) in compData.tab" v-show="current === index" :key="'img' + index"
                   class="finance-report-tab-dat">

                <div v-for="(imgitem, idx) in item.value.content" v-show="current_image_number === idx"
                     :key="'image' + idx">

                  <div v-for="(imglist, indx) in imgitem.value" :key="'img' + indx" class="sq-financial-report">

                    <img class="img-fluid" :src="HOST + imglist.image.original.src" alt="">

                  </div>
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
    display: inline-block;
    margin: 0 0 50px 0;

    a {
      transition: all 0.3s ease-in-out;
      text-decoration: none;
      display: inline-block;
      color: #313131;
      font-size: 1.2rem;
      font-family: $font-helvetica-bold;
      padding: .8rem 2rem;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid $brand-color;
        background: darken(#efefef, 10%);
      }
    }
  }

  /*Report Tab*/
  .finance-report-tab {
    margin-bottom: 3rem;
    display: block;
    width: 100%;

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
      padding: 1rem 1.6rem;
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
    img {
    }
  }

  .sq-f-report-caption {
    h4 {
      font-family: $font-roboto;
      text-transform: capitalize;
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
