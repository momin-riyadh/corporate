<template>
  <div class="sq-business-area">
    <div class="container-fluid px-5-percent my-5">
      <div class="sq-business">
        <div class="row">
          <div class="sq-business-industries">
            <div class="sq-business-logo-area" v-for="(brand, index) in compData.brands" :key="'b' + index">
              <div class="sq-business-logo">
                <img class="img-fluid" :src="HOST + brand.image.original.src" alt="square">

                <div class="sq-business-caption">

                  <h2>{{brand.title}}</h2>
                  <p>{{brand.text}}</p>

                </div>
              </div>
            </div>

            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-pharma-ad.png" alt="square">
                <div class="sq-business-caption">

                  <h2>Square Pharmaceuticals Ltd (Agrovet Division)</h2>
                  <p>So you can imagine your fears with less distraction.</p>

                </div>
              </div>

            </div>

            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-pharma-cd.png" alt="square">
                <div class="sq-business-caption">

                  <h2>Square Pharmaceuticals Ltd (Crop Division)</h2>
                  <p>So you can imagine your fears with less distraction.</p>

                </div>
              </div>

            </div>
            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-hospital.png" alt="square">
                <div class="sq-business-caption">

                  <h2>Square Hospitals Ltd (Crop Division)</h2>
                  <p>So you can imagine your fears with less distraction.</p>

                </div>
              </div>

            </div>
            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-hn.png" alt="square">
              </div>
            </div>

            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-textile.png" alt="square">
              </div>

            </div>
            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-knit.png" alt="square">
              </div>

            </div>
            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sa-tea.png" alt="square">
              </div>

            </div>
            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-texcom.png" alt="square">
              </div>

            </div>
            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-yarns.png" alt="square">
              </div>

            </div>
            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-fashions.png" alt="square">
              </div>

            </div>
            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-toiletries.png" alt="square">
              </div>

            </div>
            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-food.png" alt="square">
              </div>

            </div>
            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-informatix.png" alt="square">
              </div>

            </div>
            <div class="sq-business-logo-area">
              <div class="sq-business-logo">
                <img class="img-fluid" src="../assets/images/business/sq-maasranga.png" alt="square">
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {BrandLogoList} from '@/store/cms.types';
    import {HOST} from '@/global';


    @Component({
        name: 'BusinessCard.vue',
        components: {},

    })


    export default class BusinessCard extends Vue {
        @Prop() compData!: BrandLogoList;
        HOST: string = HOST;
    }
</script>

<style scoped lang="scss">

  .sq-business-industries {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin: 0 auto;
  }

  .sq-business-logo-area {
    .sq-business-logo {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 30px;
      text-align: left;
      overflow: hidden;
      cursor: pointer;
      background: #f7f7f7;
    }
  }

  .sq-business-logo-area {
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

    @media (min-width: 1905px) {
      width: calc(20% - 30px);
      margin: 0 15px 30px;
    }
  }

  .sq-business-caption {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 0;
    left: 0;
    padding: 15px 3em;
    width: 100%;
    height: 100%;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &::before {
      position: absolute;
      top: 30px;
      right: 30px;
      bottom: 30px;
      left: 100%;
      border-left: 4px solid rgba(255, 255, 255, 0.8);
      content: '';
      opacity: 0;
      background-color: rgba(255, 255, 255, 0.5);
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      -webkit-transition-delay: 0.6s;
      transition-delay: 0.6s;
    }
  }

  .sq-business-caption {
    h2, p {
      margin: 0 0 5px;
      opacity: 0;
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s, -webkit-transform 0.35s, -moz-transform 0.35s, -o-transform 0.35s, transform 0.35s;
      color: #fff;
    }

    h2 {
      font-family: $font-helvetica;
      font-weight: 500;
      text-transform: uppercase;
      -webkit-transform: translate3d(30%, 0%, 0);
      transform: translate3d(30%, 0%, 0);
      -webkit-transition-delay: 0.3s;
      transition-delay: 0.3s;
      font-size: 1.4rem;
    }

    p {
      font-family: $font-roboto;
      font-weight: 200;
      -webkit-transform: translate3d(0%, 30%, 0);
      transform: translate3d(0%, 30%, 0);
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
    }
  }

  .sq-business-logo {
    &:hover {
      img {
        opacity: 0.3;
      }
    }

    &:hover {
      .sq-business-caption h2 {
        opacity: 1;
        -webkit-transform: translate3d(0%, 0%, 0);
        transform: translate3d(0%, 0%, 0);
        -webkit-transition-delay: 0.4s;
        transition-delay: 0.4s;
      }

      .sq-business-caption p {
        opacity: 0.9;
        -webkit-transform: translate3d(0%, 0%, 0);
        transform: translate3d(0%, 0%, 0);
        -webkit-transition-delay: 0.6s;
        transition-delay: 0.6s;
      }
    }

    &:hover {
      .sq-business-caption {
        &::before {
          background: rgba(255, 255, 255, 0);
          left: 30px;
          opacity: 2;
          -webkit-transition-delay: 0s;
          transition-delay: 0s;
        }
      }
    }

    img {
      max-width: 100%;
      opacity: 1;
      width: 100%;
      -webkit-transition: opacity 0.35s;
      transition: opacity 0.35s;
    }
  }

  /*.sq-business-logo {*/
  /*  !*width: auto;*!*/
  /*  !*height: 340px;*!*/
  /*  */
  /*  text-align: center;*/
  /*  line-height: 1;*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*  flex-shrink: 0;*/
  /*  border-radius: 2px;*/
  /*  position: relative;*/
  /*}*/

  .sq-business-logo img {
    /*width: 300px;*/
    /*height: 80px;*/
    /*object-fit: cover;*/
    /*-o-object-fit: cover;*/
    /*object-position: center;*/
    /*-o-object-position: center;*/
  }


</style>
