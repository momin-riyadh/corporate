<template>
  <div class="sq-contact">
    <Navigation/>
    <CommonBanner v-bind:ImageUrl="require('../assets/images/contact@2x.jpg')" BannerTitle="contact us" BannerSubtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>

    <!--    Custom Google Maps Api Integrations-->
    <div class="container-fluid px-5-percent ">
      <div class="sq-map-area overflow-hidden">
        <div id="sq-map" class="google-map" ref="googleMap"></div>
        <div class="sq-map-form">
          <h1>Get In Touch</h1>
          <div class="d-block map-radio">
            <el-radio v-model="radio1" label="1">Are you looking for an industry specific solutions ?</el-radio>
          </div>
          <div class="d-block map-radio my-3">
            <el-radio v-model="radio1" label="2">Are you looking for a specific product ?</el-radio>
          </div>
          <div class="d-block map-radio">
            <el-radio v-model="radio1" label="3">Any others solutions ?</el-radio>
          </div>
          <h3>Select Industry <i> (Optional) </i></h3>
          <div>

          </div>
        </div>
      </div>


    </div>
    <!--    End Custom Google Maps Api Integrations-->

    <div class="container-fluid px-5-percent mb-5">
      <div class="sq-contact-form-area">

        <div class="sq-contact-form">
          <form action="">
            <div class="form-row">
              <div class="input-fname">
                <input class="form-control" type="text" name="" placeholder="First Name *">
              </div>
              <div class="input-lname">
                <input type="text" name="" class="form-control" placeholder="Last Name *">
              </div>
            </div>
            <div class="form-row">
              <div class="input-email">
                <input class="form-control" type="Email" name="" placeholder="Email *">
              </div>
              <div class="input-phone">
                <input type="text" name="" class="form-control" placeholder="Phone Number *">
              </div>
            </div>
            <div class="form-group">
                  <textarea class="form-control" name="" id="" cols="30" rows="15"
                            placeholder="Type your message"></textarea>
            </div>

            <div class="form-group mb-0">
              <button class="btn btn-block sq-contact-btn" type="submit">
                SEND
              </button>
            </div>

          </form>
        </div>
        <div class="sq-address-area text-center">

          <div class="sq-address-title">
            <h3>Contact information</h3>
          </div>

          <div class="sq-address text-left p-3">

            <address>
              <div>
                <h4>Head Office</h4>
                Sonartari Tower (11th Floor) <br/>
                12, Sonargaon Road <br/>
                Dhaka-1000 <br/>
                Phone: 8802-9632730-1 <br/>
                Fax: 8802-9632733, 8623053
              </div>

            </address>
          </div>
        </div>

      </div>
    </div>


    <Footer></Footer>
    <Copyright></Copyright>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '@/components/Navigation.vue';
    import Footer from '@/components/Footer.vue';
    import Copyright from '@/components/Copyright.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import GoogleMapsLoader from 'google-maps';

    @Component({
        name: 'Contact',
        components: {CommonBanner, Copyright, Footer, Navigation},
    })
    export default class Contact extends Vue {
        public data() {
            return {
                radio1: '1',
                radio2: '1',
                radio3: '1',
            };
        }

        public mounted() {
            GoogleMapsLoader.load(function (google: any) {
                const map = new google.maps.Map(document.getElementById('sq-map'), {
                        zoom: 18,
                        center: new google.maps.LatLng(21.139808079490507, 79.07690763473511),
                    },
                );
            });
        }
    }
</script>

<style scoped lang="scss">

  /*Right Address Area*/
  .sq-address-area {
    background: $brand-color;
    color: $white-color;
    flex-shrink: 0;
    width: 100%;
    @media all and (min-width: 961px) {
      width: 400px;
    }
  }

  .sq-address-title {
    min-height: 80px;
    background: darken($brand-color, 10%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    h3 {
      margin: 0;
      padding: 0;
      line-height: 1;
      font-family: $font-helvetica-bold;
      font-size: calc(22px + (22 - 18) * ((100vw - 300px) / (1600 - 300)));
    }
  }

  .sq-address {
    address {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }


  .sq-contact-form-area {
    flex-direction: column;
    @media(min-width: 961px) {
      display: flex;
      flex-direction: row;
    }
  }

  .sq-contact-form {
    background: #EFEFEF;
    padding: 2rem;
    flex-grow: 1;
    margin-right: 0;
    margin-bottom: 30px;
    @media(min-width: 961px) and (max-width: 1264px) {
      padding: 2rem;
      margin-right: 2rem;
      margin-bottom: 0;
    }

    @media(min-width: 1265px) {
      padding: 4rem;
      margin-right: 5rem;
      margin-bottom: 0;
    }

    form {
      input {
        background: $white-color;
        border: 0;
        padding: 2.5rem .8rem;
        font-family: $font-roboto;

        &:hover, &:focus {
          outline: none;
        }

        /*Placeholder Color*/

        &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
          color: #6D6D6D;
          position: relative;

          &:after {
            content: " *";
            color: #ff3f00;
          }
        }

        [required]::-webkit-input-placeholder { /* Chrome/Opera/Safari */
          &:after {
            content: " *";
            color: #ff3f00;
          }
        }

        &::-moz-placeholder { /* Firefox 19+ */
          color: #6D6D6D;
        }

        &:-ms-input-placeholder { /* IE 10+ */
          color: #6D6D6D;
        }

        &:-moz-placeholder { /* Firefox 18- */
          color: #6D6D6D;
        }


      }

      textarea {
        border: 0;
      }
    }

  }


  /*Contact Form Mobile Fast Code*/
  .sq-contact-form {
    form {
      .input-fname, .input-lname, .input-email, .input-phone {
        display: block;
        width: 100%;
        margin-bottom: 30px;
        @media(min-width: 1265px) {
          width: 50%;
        }
      }

      .input-fname, .input-email{
        padding-right: 30px;
        @media(max-width: 1264px){
          padding-right: 0;
        }
      }
    }
  }

  /*Contact form button style*/
  .sq-contact-btn {
    background: #4D4D4D;
    padding: 1.3rem 0;
    color: $white-color;
    font-family: $font-roboto;
    text-transform: uppercase;
    font-size: 1.5rem;
  }


  .contact-form-bt {
    float: right;
    width: 100%;
    margin-top: 20px;
    outline: 0 !important;
  }

  .button-border-blue {
    color: #fff;
    background-color: transparent;
    border: 1px solid #96daf0;
  }

  .button {
    color: #242a3a;
    text-decoration: none;
    font-size: 14px;
    border: 1px solid #242a3a;
    font-family: $font-roboto;
    padding: 17px 25px;
    display: inline-block;
    min-width: 160px;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 100%;
    position: relative;
    overflow: hidden;
    z-index: 5;
    outline: 0 !important;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: color 0.8s cubic-bezier(0.165, 0.84, 0.44, 1),
    border 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: color 0.8s cubic-bezier(0.165, 0.84, 0.44, 1),
    border 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .button-border-blue:after {
    background-color: #96daf0;
  }

  .button:after,
  .top-bar-back:before,
  .top-bar-back:hover:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-color: #000000;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    transition: -webkit-transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0s,
    -webkit-transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    -webkit-transform-origin: top left;
    transform-origin: top left;
  }

  .button-border-blue:hover {
    color: #ffffff;
  }

  .bottom-link-to-inner:hover .bottom-link-to-button:after,
  .button:hover:after,
  .product-desc-img:hover .product-desc-img-button .button:after,
  .product-desc-img:hover .product-desc-img-button .top-bar-back:before,
  .top-bar-back:hover:before,
  .travel-type-focus-block:hover .travel-type-focus-bt .button:after,
  .travel-type-focus-block:hover .travel-type-focus-bt .top-bar-back:before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
  }

  .sq-map-area {
    position: relative;
    z-index: 2;
  }

  #sq-map {
    height: 500px;
    max-width: 100%;
    display: block;
    background: #EFEFEF;
    padding: 1rem !important;
    margin-bottom: 3rem;
  }

  .sq-map-form {
    min-width: 500px;
    height: 420px;
    margin: 1.5rem 0 1.5rem 1.5rem;
    background: #2C2C2C;
    padding: 1.8rem;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    top: 1rem;

    h1 {
      color: $white-color;
      font-family: $font-helvetica-bold;
      margin-bottom: 1rem;
    }

    h3 {
      color: $white-color;
      font-family: $font-helvetica-bold;
      margin: 1rem 0;

      i {
        font-size: medium;
        font-weight: normal;
        font-family: $font-roboto;
      }
    }
  }

  .map-radio {
    background: #222222;
    padding: 1rem .7rem;
  }
</style>
