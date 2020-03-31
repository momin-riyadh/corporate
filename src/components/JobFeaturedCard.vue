<template>
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
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        name: 'JobFeaturedCard.vue',
        components: {}
    })

    export default class JobFeaturedCard extends Vue {

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
</style>