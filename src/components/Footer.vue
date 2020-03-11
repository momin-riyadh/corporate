<template>
  <div class="footer">
    <div class="container-fluid px-5-percent">
      <div class="footer-area">

        <div class="footer-about-us">
          <h3 class="mb-4 mb-md-5">About Us</h3>
          <p>SQUARE Pharmaceuticals Limited is the largest pharmaceutical company in Bangladesh and it has been
            continuously in the 1st position among all national and multinational companies since 1985.</p>

          <p>Its range of products and services towards the highway of global market. It pioneered exports of medicines
            from Bangladesh in 1987.</p>
          <div class="sq-footer-social mt-4 mt-md-5">
            <a href="">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="">
              <i class="fab fa-linkedin-in"></i>
            </a>

          </div>
        </div>

        <div class="footer-useful-links">
          <h3 class="mb-4 mb-md-5">useful links</h3>
          <ul>
            <li><a href="">latest news</a></li>
            <li><a href="">legal notice</a></li>
            <li><a href="">investor relation</a></li>
            <li><a href="">media relation</a></li>
            <li><a href="">about us</a></li>
            <li><a href="">faq</a></li>
            <li><a href="">contact</a></li>
            <li><a href="">career</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h3 class="mb-4 mb-md-5">contact</h3>

          <div class="sq-address mb-4">
            SQUARE Centre 48, <br/>
            Mohakhali C/A Dhaka 1212, <br/>
            Bangladesh
          </div>

          <div class="sq-contact">
            +88-02-9859007, +88-02-8833047-56 <br/>
            Email: info@squaregroup.com
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'Footer',
        components: {},
    })

    export default class Footer extends Vue {

    }
</script>

<style scoped lang="scss">
  .footer {
    background: $footer-bg;
    padding: 4rem 0;
    margin-top: 50px;
    overflow: hidden;
  }

  .footer-area {
    display: flex;
    justify-content: space-between;
    @media(max-width: 991px) {
      flex-direction: column;
    }
  }

  .footer-about-us {
    flex-basis: 30%;
    max-width: 450px;
    @media(max-width: 991px) {
      flex-basis: 100%;
      margin-bottom: 50px;
    }

    h3 {
      color: $white-color;
      text-transform: capitalize;
      font-family: $font-helvetica;
    }

    p {
      color: #C7C7C7;
      font-family: $font-roboto;
      font-size: .9rem;
      font-weight: lighter;
      text-align: justify;
    }
  }

  .sq-footer-social {
    display: flex;

    a {
      transition: all 0.3s ease-in-out;
      display: inline-block;
      color: $white-color;
      line-height: 1;
      font-size: 1.2em;

      &:not(:last-child) {
        border-right: 1px solid #707070;
      }

      &:not(:last-child) {
        padding-right: 2rem;
      }

      &:not(:first-child) {
        padding-left: 2rem;

      }

      &:hover {
        color: $brand-color;
      }
    }
  }

  .footer-useful-links {
    flex-basis: 40%;
    @media(max-width: 991px) {
      flex-basis: 100%;
      margin-bottom: 50px;
    }

    h3 {
      color: $white-color;
      text-transform: capitalize;
      font-family: $font-helvetica;
    }

    ul {
      column-count: 2;
      column-gap: 4rem;
      margin: 0;
      padding: 0;
      margin-top: -20px;
    }

    li {
      list-style: none;
      display: block;
      margin: 0;
      padding: 10px 0;

      a {
        z-index: 1;
        position: relative;
        display: block;
        padding: 10px 5px;
        border-bottom: 1px solid #5A5555;
        color: #c7c7c7;
        text-transform: capitalize;
        font-size: .9rem;
        text-decoration: none;

        &::before {
          content: '';
          z-index: -1;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #5A5555;
          transform-origin: center top;
          transform: scaleY(0);
          transition: transform 0.3s ease-in-out;
        }

        &:hover::before {
          transform-origin: center bottom;
          transform: scaleY(1);
        }
      }
    }
  }

  .footer-contact {
    flex-basis: auto;
    color: #c7c7c7;
    @media(max-width: 991px) {
      flex-basis: 100%;
    }

    h3 {
      color: $white-color;
      text-transform: capitalize;
      font-family: $font-helvetica;
    }
  }

  .sq-address {
    font-weight: lighter;
    font-size: .9rem;
  }

  .sq-contact {
    font-weight: lighter;
    font-size: .9rem;
  }
</style>
