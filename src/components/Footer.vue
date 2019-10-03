<template>
  <div class="footer">
    <div class="container-fluid px-5-percent">
      <div class="footer-area">

        <div class="footer-about-us">
          <h3 class="mb-5">About Us</h3>
          <p>SQUARE Pharmaceuticals Limited is the largest pharmaceutical company in Bangladesh and it has been
            continuously in the 1st position among all national and multinational companies since 1985.</p>

          <p>Its range of products and services towards the highway of global market. It pioneered exports of medicines
            from Bangladesh in 1987.</p>

        </div>

        <div class="footer-useful-links">
          <h3 class="mb-5">useful links</h3>
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
          <h3 class="mb-5">contact</h3>

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
  }

  .footer-area {
    display: flex;
    justify-content: space-between;
  }

  .footer-about-us {
    flex-basis: 30%;

    h3 {
      color: $white-color;
      text-transform: capitalize;
    }

    p {
      color: #C7C7C7;
      font-family: $font-roboto;
      font-size: .9rem;
      font-weight: lighter;
    }
  }

  .footer-useful-links {
    flex-basis: 40%;

    h3 {
      color: $white-color;
      text-transform: capitalize;
    }

    ul {
      column-count: 2;
      column-gap: 4rem;
      margin: 0;
      padding: 0;
      margin-top: -15px;

    }

    li {
      list-style: none;
      display: block;
      margin: 0;
      padding: 15px 0;

      a {
        display: block;
        padding-bottom: 15px;
        border-bottom: 1px solid #5A5555;
        color: #c7c7c7;
        text-transform: capitalize;
        font-size: .9rem;
        text-decoration: none;
      }
    }
  }

  .footer-contact {
    flex-basis: auto;
    color:#c7c7c7;
    h3 {
      color: $white-color;
      text-transform: capitalize;
    }
  }

  .sq-address{
    font-weight: lighter;
    font-size: .9rem;
  }
  .sq-contact{
    font-weight: lighter;
    font-size: .9rem;
  }
</style>