<template>
  <div class="annual-report-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/annual-report@2x.jpg')"
                  banner-title="annual report"
                  banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"

    />


    <!--      Annual Report Section/Column Start-->
    <div class="container-fluid px-5-percent">
      <div class="annual-report">

        <!--    Annual Report Year-->
        <div class="text-center text-sm-left">
          <div class="annual-report-year">

            <el-tabs @tab-click="handleClick">
              <el-tab-pane label="2019">

                <!--        Annual Report Column-->
                <div class="row">
                  <div class="custom-areas align-items-center">
                    <div class="s-a-report" v-for="file in files">
                      <img class="img-fluid" :src="file.imageurl" alt="square">
                      <div class="s-a-report-caption text-center mt-3">
                        <h4> {{file.title}}</h4>
                      </div>
                    </div>

                  </div>
                </div>

                <!--        End Annual Report Column-->


              </el-tab-pane>
              <el-tab-pane label="2018">

                <!--        Annual Report Column-->
                <div class="row">
                  <div class="custom-areas align-items-center">
                    <div class="s-a-report" v-for="v in 2">
                      <img class="img-fluid" src="../assets/images/nopreview.jpg" alt="square group">
                    </div>

                  </div>
                </div>

                <!--        End Annual Report Column-->


              </el-tab-pane>
              <el-tab-pane label="2017">

                <!--        Annual Report Column-->
                <div class="row">
                  <div class="custom-areas align-items-center">
                    <div class="s-a-report" v-for="v in 2">

                        <img class="img-fluid" src="../assets/images/nopreview.jpg" alt="square group">

                    </div>

                  </div>
                </div>

                <!--        End Annual Report Column-->


              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <!--        End Annual Report Year-->


      </div>
    </div>
    <!--      End-->
    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import Navigation from '../components/Navigation.vue';
    import CommonBanner from '../components/CommonBanner.vue';
    import Footer from '@/components/Footer.vue';
    import Copyright from '@/components/Copyright.vue';

    @Component({
        name: 'AnnualReport',
        components: {
            Copyright,
            Footer,
            CommonBanner,
            Navigation,

        },
    })

    export default class AnnualReport extends Vue {

        public data() {
            return {
                activeName: 'first'
            };
        }

        public handleClick(tab: any, event: any) {
            console.log(tab, event)
        }

        public files: any = [
            {
                title: 'Interim Results 2018',
                imageurl: require('../assets/images/ar-one@2x.jpg'),
            },
            {
                title: 'Interim Results 2018',
                imageurl: require('../assets/images/ar-two@2x.jpg'),
            },
            {
                title: 'Interim Results 2018',
                imageurl: require('../assets/images/ar-three@2x.jpg'),
            },
            {
                title: 'Interim Results 2018',
                imageurl: require('../assets/images/ar-four@2x.jpg'),
            },
            {
                title: 'Interim Results 2018',
                imageurl: require('../assets/images/ar-five@2x.jpg'),
            },
            {
                title: 'Interim Results 2018',
                imageurl: require('../assets/images/ar-six@2x.jpg'),
            },
            {
                title: 'Interim Results 2018',
                imageurl: require('../assets/images/ar-one@2x.jpg'),
            },
            {
                title: 'Interim Results 2018',
                imageurl: require('../assets/images/ar-two@2x.jpg'),
            },
            {
                title: 'Interim Results 2018',
                imageurl: require('../assets/images/ar-six@2x.jpg'),
            },
            {
                title: 'Interim Results 2018',
                imageurl: require('../assets/images/ar-one@2x.jpg'),
            },
        ];
    }
</script>

<style scoped lang="scss">
  .annual-report-year {
    display: inline-block;
    margin: 50px 0 30px 0;

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


  .custom-areas {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin: 0 auto;
  }

  .s-a-report {
    img {
      border: 1rem solid #EFEFEF;
    }
  }

  .s-a-report-caption {
    h4 {
      font-family: $font-roboto;
    }
  }

  .s-a-report {
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
</style>