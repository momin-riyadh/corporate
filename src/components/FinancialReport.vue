<template>
  <div class="financial-information-area">
    <!--    Financial Information Report Section Start-->
    <div class="container-fluid px-5-percent">
      <div class="financial-report">
        <!--    Annual Report Year-->
        <div class="text-center text-sm-left">
          <div class="financial-report-year">

            <el-tabs @tab-click="handleClick">
              <el-tab-pane label="2019">
                <div class="row">

                  <div class="financial-areas align-items-center">

                    <div class="sq-financial-report" v-for="report in reports">
                      <img class="img-fluid" :src="report.imageurl" alt="square group">
                      <div class="sq-f-report-caption text-center mt-3">
                        <h4> {{report.title}}</h4>
                      </div>
                    </div>

                  </div>
                </div>
              </el-tab-pane>

              <el-tab-pane label="2018">

                <div class="row">
                  <div class="financial-areas align-items-center">

                    <div class="sq-financial-report">
                      <!--                      <img class="img-fluid" src="../assets/images/nopreview.jpg" alt="square group">-->
                      <h1 class="display-2">No preview available!</h1>

                    </div>

                  </div>
                </div>

              </el-tab-pane>

              <el-tab-pane label="2017">
                <h1 class="display-2">No preview available!</h1>
              </el-tab-pane>
            </el-tabs>
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

        public data() {
            return {
                activeName: 'first',
            };
        }

        public handleClick(tab: any, event: any) {
            // console.log(tab, event);
        }


        public reports: any = [
            {
                title: 'Earning Presentations',
                imageurl: require('../assets/images/ep@2x.jpg'),
            },
            {
                title: 'Analyst presentation',
                imageurl: require('../assets/images/ap@2x.jpg'),
            },
            {
                title: 'Slavery Act statement',
                imageurl: require('../assets/images/sa@2x.jpg'),
            },
            {
                title: 'Slavery Act statement',
                imageurl: require('../assets/images/sas@2x.jpg'),
            },
            {
                title: 'Slavery Act statement',
                imageurl: require('../assets/images/sa@2x.jpg'),
            },

        ];
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
