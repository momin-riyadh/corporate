<template>
  <div class="career-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/career@2x.jpg')"
                  banner-title="Find the right job" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>


    <div class="container-fluid px-5-percent">
      <div class="job-category-area">

        <div class="job-category-title mb-5">
          <h1 class="common-title"><span>Browse Category</span></h1>
          <p class="common-sub-title">We strive to go beyond for our clients</p>
        </div>

        <div class="job-category mb-5">
          <ul>
            <li v-for="{title, vacancy, index} in category">
              <router-link to="/career-details">
                {{ title}}
                <span> ({{vacancy}})</span>
              </router-link>
            </li>
          </ul>
        </div>

      </div>


      <div class="featured-job-area">
        <div class="job-category-title">
          <h1 class="common-title"><span>Featured Job</span></h1>
          <p class="common-sub-title">Far far away, behind the word mountains,</p>
        </div>

        <div class="featured-job">
          <ul>
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


    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '@/components/Navigation.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Footer from '@/components/Footer.vue';
    import Copyright from '@/components/Copyright.vue';

    @Component({
        name: 'Career',
        components: {Copyright, Footer, CommonBanner, Navigation},
    })

    export default class Career extends Vue {

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
                imageurl: require('../assets/images/square-fashions.svg'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Pharmaceuticals Ltd ',
                imageurl: require('../assets/images/splogo.svg'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Pharmaceuticals Ltd ',
                imageurl: require('../assets/images/splogo.svg'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Foods Ltd ',
                imageurl: require('../assets/images/sq-food.svg'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Hospitals Ltd ',
                imageurl: require('../assets/images/sq-hospital.svg'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Pharmaceuticals Ltd ',
                imageurl: require('../assets/images/square-fashions.svg'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Pharmaceuticals Ltd ',
                imageurl: require('../assets/images/splogo.svg'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
            {
                title: 'Square Pharmaceuticals Ltd ',
                imageurl: require('../assets/images/splogo.svg'),
                sublists: [{text: 'Development Executive'}, {text: 'Front Desk Executive'}, {text: 'Accounts Officer'}],
            },
        ];
    }

</script>

<style scoped lang="scss">
  .job-category-title {
    margin-left: 95px;
    margin-bottom: 5.5rem;
  }

  .common-sub-title {
    font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));
    color: #292929;
    font-weight: bold;
    font-family: $font-roboto;
  }

  .common-title {
    line-height: 1;
    color: $brand-color;
    font-family: $font-roboto;
    font-weight: bold;
    font-size: calc(24px + (42 - 24) * ((100vw - 300px) / (1600 - 300)));
  }

  .common-title span {
    display: inline-block;
    position: relative;
  }

  .common-title span:before {
    content: "";
    position: absolute;
    height: 5px;
    border-bottom: 4px solid $brand-color;
    top: 50%;
    width: 80px;
  }

  .common-title span:before {
    right: 100%;
    margin-right: 15px;
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
        padding: 2rem 0;
        border-bottom: 1px solid #D8D8D8;
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;

        a {
          text-decoration: none;
          font-family: $font-roboto;
          color: #222222;
          font-size: calc(18px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
        }
      }
    }
  }

  .featured-job-area {
    margin-top: 8rem;
  }

  .featured-job {
    > ul {
      margin: 0;
      padding: 0;
      list-style: none;
      column-count: 1;
      column-gap: 5rem;
      @media(min-width: 961px) {
        column-count: 2;
      }
      @media(min-width: 1265px) {
        column-count: 3;
        column-gap: 3rem;
      }
      @media(min-width: 1905px) {
        column-count: 4;
        column-gap: 5rem;
      }

      > li {
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;
        margin-bottom: 4.5rem;
      }
    }


  }

  .s-featured-job {
    display: flex;
    align-items: center;
  }


  .s-f-job-img {
    padding-right: 1rem;

  }

  .s-featured-job-brief {
    h5 {
      color: #222222;
      font-family: $font-roboto;
      font-weight: 500;
    }

    border-left: 1px solid #dddddd;
    padding-left: 1rem;

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

        &::before {
          display: inline-block;
          position: absolute;
          content: '';
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 8px solid $brand-color;
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
        width: 70%;
      }

      img:last-child {
        width: 30%;
        flex-shrink: 0;
        object-fit: cover;
      }
    }

    .second-row {
      display: flex;
      height: 40vh;
      width: 100%;

      img:first-child {
        width: 30%;
        flex-shrink: 0;
        object-fit: cover;
      }

      img:last-child {
        flex-grow: 1;
        object-fit: cover;
        width: 70%;
      }
    }
  }
</style>