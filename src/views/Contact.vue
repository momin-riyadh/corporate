<template>
  <div class="sq-contact">
    <Navigation/>
    <CommonBanner v-bind:ImageUrl="require('../assets/images/contact@2x.jpg')" BannerTitle="contact us" BannerSubtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>

    <!--    Custom Google Maps Api Integrations-->
    <div>
      <div class="google-map" ref="googleMap"></div>
      <template v-if="Boolean(this.google) && Boolean(this.map)">
        <slot
                :google="google"
                :map="map"
        />
      </template>
    </div>
    <!--    End Custom Google Maps Api Integrations-->

    <div class="container-fluid px-5-percent mb-5">
      <div class="sq-contact-form-area">
        <div class="row">
          <div class="col-lg-9 col-sm-6">
            <div class="sq-contact-form">
              <form action="">
                <div class="form-row ">
                  <div class="col-md-6 pr-sm-3 mb-2">
                    <input class="form-control" type="text" name="" placeholder="First Name">
                  </div>
                  <div class="col-md-6 pl-sm-3 mb-2">
                    <input type="text" name="" class="form-control" placeholder="Last Name *">
                  </div>
                </div>
                <div class="form-row my-4">
                  <div class="col-md-6 pr-sm-3 mb-2">
                    <input class="form-control" type="Email" name="" placeholder="Email *">
                  </div>
                  <div class="col-md-6 pl-sm-3 mb-2">
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
          </div>


          <div class="col-lg-3 col-sm-6">
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

    @Component({
        name: 'Contact',
        components: {CommonBanner, Copyright, Footer, Navigation},
    })
    export default class Contact extends Vue {

    }
</script>

<style scoped lang="scss">

  /*Right Address Area*/
  .sq-address-area {
    background: $brand-color;
    color: $white-color;
  }

  .sq-address-title {
    min-height: 80px;
    background: darken($brand-color, 5%);
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

  }

  .sq-contact-form {
    background: #EFEFEF;
    padding: 4rem;

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

  .sq-contact {


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

</style>