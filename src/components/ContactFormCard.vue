<template>
  <div class="container-fluid px-5-percent mb-5">
    <div class="sq-contact-form-area">

      <div class="sq-contact-form">
        <form action="">
          <div class="form-row">
            <div class="input-fname">
              <input class="form-control" type="text" name="" placeholder="Your Name *">
            </div>
            <div class="input-lname">
              <input type="text" name="" class="form-control" placeholder="Subject">
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
                            placeholder="Type your message"/>
          </div>

          <div class="form-group mb-0">
            <button class="btn btn-block sq-contact-btn" type="submit">
              SEND
            </button>
          </div>

        </form>
      </div>
      <AddressCard/>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import AddressCard from "@/components/AddressCard.vue";

    @Component({
        name: 'ContactFormCard.vue',
        components: {AddressCard}
    })
    export default class FormCard extends Vue {

    }
</script>

<style scoped lang="scss">
  .sq-contact-form-area {
    display: flex;
    flex-direction: column-reverse;
    @media(min-width: 961px) {
      display: flex;
      flex-direction: row;
    }
  }

  .sq-contact-form {
    background: #EFEFEF;
    flex-grow: 1;
    margin-right: 0;
    @media(min-width: 961px) and (max-width: 1264px) {
      padding: 2rem;
      margin-right: 2rem;
    }

    @media(min-width: 1265px) {
      padding: 3rem;
      margin-right: 5rem;
      margin-bottom: 0;
    }

    form {
      overflow: hidden;
      padding: 1.1rem;

      input {
        background: $white-color;
        border: 0;
        padding: 1.8rem .5rem;
        font-family: $font-roboto;
        @media(min-width: 601px) {
          background: $white-color;
          border: 0;
          padding: 2.5rem .8rem;
          font-family: $font-roboto;
        }

        &:hover, &:focus {
          outline: 0 !important;
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

      .input-fname, .input-email {
        padding-right: 30px;
        @media(max-width: 1264px) {
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

</style>