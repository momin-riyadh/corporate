<template>
  <div v-show="pageData" :key="pageData.id" class="career-area">
    <Navigation/>

    <!--=============================
           Common Banner
   =============================-->
    <div class="common-banner-area">
      <div class="container-fluid p-0">
        <div class="common-banner js-bannerimage">
          <img class="img-fluid" :src="HOST + pageData.banner_image.url" alt="square">

          <div class="banner-content">
            <h1 class="jstitle"> {{ pageData.title }}</h1>
            <p class="jssubtitle"> {{ pageData.text }}</p>
          </div>

        </div>
      </div>
    </div>
    <!--    End-->


    <!--====================================
           JobIndexPage Components Loop
        ====================================-->
    <component
            v-for="comp in pageData.body"
            :key="comp.id"
            :is="comp.type"
            :comp-data="comp.value">
    </component>
    <!--    End-->




    <div class="container-fluid px-5-percent">
      <div ref="jsjobarea" class="job-category-area overflow-auto">

        <div class="job-category-title text-center">
          <h1 class="common-title"><span>Browse Category</span></h1>
          <p class="common-sub-title">We strive to go beyond for our clients a relationship built on trust, confidence
            and honesty.</p>
        </div>

        <div class="job-category mb-3 mb-sm-4">
          <ul>
            <li v-for="{title, vacancy, index} in category">
              <router-link to="/career-list">
                {{ title }}
                <span> ({{vacancy}})</span>
              </router-link>
            </li>
          </ul>
        </div>

      </div>


      <div class="featured-job-area">
        <div class="job-category-title text-center">
          <h1 class="common-title"><span>Featured Job</span></h1>
          <p class="common-sub-title">We strive to go beyond for our clients a relationship built on trust, confidence
            and honesty.</p>
        </div>


        <div class="featured-job">
          <ul class="align-items-center">
            <li v-for="featured  in featureds">

              <div class="s-featured-job">

                <div class="s-f-job-img">
                  <img :src="featured.imageurl" alt="square group">
                </div>

                <div class="s-featured-job-brief">
                  <h5>{{ featured.title }} </h5>
                  <ul>
                    <router-link tag="li" to="/career-details" v-for="sublist in featured.sublists"
                                 v-bind:sublist="sublist"> {{ sublist.text }}
                    </router-link>
                  </ul>
                </div>

              </div>

            </li>
          </ul>
        </div>


      </div>


    </div>


    <!--    Bottom Image Grid-->

    <div class="container-fluid px-5-percent">
      <div class="bottom-image-grid my-5">
        <div class="first-row">
          <img src="../assets/images/grid-one@2x.jpg" alt="square-group" class="img-fluid">
          <img src="../assets/images/grid-two@2x.jpg" alt="square-group" class="img-fluid">
        </div>
        <div class="second-row">
          <img src="../assets/images/grid-three@2x.jpg" alt="square-group" class="img-fluid">
          <img src="../assets/images/grid-four@2x.jpg" alt="square-group" class="img-fluid">
        </div>
      </div>
    </div>

    <FooterCard/>
    <CopyrightCard/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import Navigation from '@/components/NavigationCard.vue';
    import FooterCard from '@/components/FooterCard.vue';
    import CopyrightCard from '@/components/CopyrightCard.vue';
    import {JobIndexPageData} from '@/store/cms.types';
    import {HOST} from '@/global'
    // import { gsap } from 'gsap';

    @Component({
        name: 'JobIndexPage.vue',
        components: {CopyrightCard, FooterCard, Navigation},
    })

    export default class Career extends Vue {
        @Prop() pageData!: JobIndexPageData
        HOST: string = HOST;


        // public mounted() {
        //     const {jsjobarea} = this.$refs;
        //     gsap.to(jsjobarea, {duration: 2, scrollTo: {y: 400}, ease:"power2"});
        // }

        public category: any = [
            {
                title: 'Accounting/Finance',
                vacancy: '22',
            },
            {
                title: 'Medical/Pharmacy',
                vacancy: '102',
            },
            {
                title: 'Law/Legal',
                vacancy: '12',
            },
            {
                title: 'Marketing/Sales',
                vacancy: '24',
            },
            {
                title: 'Research/Consultancy',
                vacancy: '78',
            },
            {
                title: 'Driving/Motor Technician',
                vacancy: '09',
            },
            {
                title: 'Education/Training',
                vacancy: '200',
            },
            {
                title: 'Garments/Textile',
                vacancy: '34',
            },
            {
                title: 'Software/Telecommunication',
                vacancy: '05',
            },
            {
                title: 'Accounting/Finance',
                vacancy: '22',
            },
            {
                title: 'Medical/Pharmacy',
                vacancy: '102',
            },
            {
                title: 'Law/Legal',
                vacancy: '12',
            },
            {
                title: 'Marketing/Sales',
                vacancy: '24',
            },
            {
                title: 'Research/Consultancy',
                vacancy: '78',
            },
            {
                title: 'Driving/Motor Technician',
                vacancy: '09',
            },
            {
                title: 'Education/Training',
                vacancy: '200',
            },
            {
                title: 'Garments/Textile',
                vacancy: '34',
            },
            {
                title: 'Software/Telecommunication',
                vacancy: '05',
            },
            {
                title: 'Education/Training',
                vacancy: '200',
            },
            {
                title: 'Garments/Textile',
                vacancy: '34',
            },
        ];

        public featureds: any = [
            {
                title: 'Square Fashions Ltd ',
                imageurl: require('../assets/images/brands/sq-fashion.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Pharmaceuticals Ltd ',
                imageurl: require('../assets/images/brands/sq-pharma.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Pharmaceuticals Limited (Agrovet Division)',
                imageurl: require('../assets/images/brands/sq-pharma-ag.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Pharmaceuticals Limited (Crop Care Division)',
                imageurl: require('../assets/images/brands/sq-pharma-cc.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Textiles Limited ',
                imageurl: require('../assets/images/brands/sq-textile.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Foods & Beverage Ltd ',
                imageurl: require('../assets/images/brands/sq-food.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Hospitals Ltd ',
                imageurl: require('../assets/images/brands/sq-hospital.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Mediacom Limited',
                imageurl: require('../assets/images/brands/sq-mediacom.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Maasranga Communications Limited',
                imageurl: require('../assets/images/brands/sq-maasranga.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Herbal & Nutraceuticals Limited',
                imageurl: require('../assets/images/brands/sq-herval.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square knit Fabrics Limited',
                imageurl: require('../assets/images/brands/sq-knit.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Texcom Limited',
                imageurl: require('../assets/images/brands/sq-texcom.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Yarns Limited',
                imageurl: require('../assets/images/brands/sq-yarn.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Toiletries Limited',
                imageurl: require('../assets/images/brands/sq-toiletries.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Informatix Limited',
                imageurl: require('../assets/images/brands/sq-informatix.png'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
        ];
    }

</script>

<style scoped lang="scss">
  .job-category-title {
    margin-bottom: 1rem;
    margin-top: 2rem;
    @media all and (min-width: 601px) {
      margin-bottom: 7rem;
    }
  }

  .common-sub-title {
    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
    color: #939393;
    font-family: $font-roboto;
    padding-top: 10px;
  }

  .common-title {
    line-height: 1;
    color: $brand-color;
    font-family: $font-roboto;
    font-weight: bold;
    font-size: calc(24px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
  }

  .common-title span {
    display: inline-block;
    position: relative;
    padding-bottom: 25px;
  }

  .common-title span:before {
    content: "";
    position: absolute;
    height: .5rem;
    border-bottom: 4px solid $brand-color;
    bottom: 0;
    width: 80px;
  }

  .common-title span:before {
    left: 50%;
    transform: translateX(-50%);
  }

  .job-category {
    ul {
      list-style: none;
      column-count: 1;
      column-gap: 6rem;
      margin: 0;
      padding: 0;
      display: block;
      @media(min-width: 961px) {
        column-count: 2;
      }
      @media(min-width: 1265px) {
        column-count: 3;
      }
      @media(min-width: 1905px) {
        column-count: 4;
      }

      li {
        margin: 0;
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;

        a {
          transition: all 0.3s ease-in-out;
          display: block;
          width: 100%;
          padding: 1.5em 0;
          text-decoration: none;
          font-family: $font-roboto;
          color: #222222;
          font-size: calc(17px + (17 - 15) * ((100vw - 300px) / (1600 - 300)));
          z-index: 1;
          position: relative;
          border-bottom: 1px solid #D8D8D8;

          &::before {
            content: '';
            z-index: -1;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: 0;
            background-color: #efefef;
            transform-origin: center top;
            transform: scaleY(0);
            transition: transform 0.25s ease-in-out;
          }

          &:hover::before {
            transform-origin: center bottom;
            transform: scaleY(1);
          }
        }
      }
    }
  }

  .featured-job-area {
    margin-top: 1rem;
    overflow: hidden;
    @media(min-width: 601px) {
      margin-top: 8rem;
      overflow: hidden;
    }
  }

  .featured-job {
    > ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      flex: 1;
      margin: 0;
      padding: 0;

      > li {
        width: calc(100% - 30px);
        margin: 0 15px 30px 15px;
        flex-shrink: 0;
        align-self: flex-start;
        @media (min-width: 800px) {
          width: calc(50% - 30px);
          margin: 0 15px 30px;
        }
        @media (min-width: 1600px) {
          width: calc(33.3333% - 30px);
          margin: 0 15px 30px;
        }
        @media (min-width: 2400px) {
          width: calc(20% - 30px);
          margin: 0 15px 30px;
        }

      }
    }


  }

  .s-featured-job {
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    cursor: pointer;
    padding: .5rem;
    @media (min-width: 601px) {
      transition: all 0.3s ease-in-out;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      cursor: pointer;
      padding: 1rem;
    }

    .s-f-job-img {
      img {
        width: 150px;
        height: auto;
        object-fit: cover;
        -o-object-fit: cover;
        margin-bottom: .8rem;
        @media all and (min-width: 601px) {
          width: 220px;
          height: auto;
          object-fit: cover;
          -o-object-fit: cover;
        }
      }
    }

    &:hover {
      background: #fcfcfc;
      padding: 1rem;
      border-radius: 4px;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);

      > .s-f-job-img {
        padding-right: 1rem;

        img {
          filter: grayscale(0);
          opacity: 1;
        }
      }

      > .s-featured-job-brief {
        ul {
          li {
            &::before {
              border-left: 8px solid $brand-color;
            }
          }
        }
      }
    }
  }


  .s-f-job-img {
    padding-right: 0;
    @media all and(min-width: 601px) {
      padding-right: 1rem;
    }

    img {
      transition: all 0.3s ease-in-out;
      filter: grayscale(1);
      opacity: 0.5;
    }
  }

  .s-featured-job-brief {
    h5 {
      color: #222222;
      font-family: $font-roboto;
      font-weight: 500;
      font-size: 18px;
    }

    border-left: none;
    padding-left: 0;
    @media all and(min-width: 601px) {
      border-left: 1px solid #dddddd;
      padding-left: 1rem;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        position: relative;
        color: #939393;
        padding-left: 1rem;
        display: block;
        margin-bottom: 0.4rem;
        cursor: pointer;
        font-size: 15px;

        &::before {
          transition: all 0.3s ease-in-out;
          display: inline-block;
          position: absolute;
          content: '';
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 8px solid gray;
          line-height: 1;
          margin-right: auto;
        }

        a {
          text-decoration: none;
          font-family: $font-roboto;
        }
      }
    }
  }


  .bottom-image-grid {

    .first-row {
      display: flex;
      height: 40vh;
      width: 100%;

      img:first-child {
        flex-grow: 1;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 70%;
        }
      }

      img:last-child {
        flex-shrink: 0;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 30%;
        }
      }
    }

    .second-row {
      display: flex;
      height: 40vh;
      width: 100%;

      img:first-child {
        flex-shrink: 0;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 30%;
        }
      }

      img:last-child {
        flex-grow: 1;
        object-fit: cover;
        width: 50%;
        @media(min-width: 961px) {
          width: 70%;
        }
      }
    }
  }
</style>
