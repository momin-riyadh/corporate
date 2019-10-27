<template>
  <div class="single-post-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/news@2x.jpg')" banner-title="News & Media"
                  banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>

    <div class="container-fluid px-15-percent">
      <div class="single-post">

        <div class="single-post-header col-md-8 col-sm-12 mx-auto mb-5 text-center">
          <h1>Enhance society and the environment instead of
            contributing negatively to them.</h1>
          <div class="post-meta mt-3">
            <a class="mr-2" href=""><i class="far fa-user-circle"></i> Momin</a>
            <a class="ml-2" href=""><i class="far fa-calendar-alt"></i> July 1, 2019</a>
          </div>
        </div>


        <div class="single-post-text">
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected umour, or randomised words which don’t look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isn’t Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>

          <p> looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classicalterature, discovered the undoubtable source. Lorem Ipsum comes from
            sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. This
            book is a treatise on the theory of ethics. This book is a treatise on the theory of ethics, very popular
            during the Renaissance.</p>
          <div class="my-5">
            <img src="../assets/images/blog-img@2x.jpg" alt="">
            <p>There are many variations of passages of Lorem Ipsum available, but theajority have suffered lteration in
              some form, by injected humour, or rando mised wrds which don’t look even slightly believable. If you are
              going to use a passage of Lorem Ipsum, you need to be sure there isn’t Contrary to popular belief, Lorem
              Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a making it over 2000 Latin professor.</p>

            <p>looked up one of the more obscure Latin words, consectetur, from a Lorem um passage, and going through
              the cites of the word in classical literature, covered the undoubtable source. Lorem Ipsum comes from
              sections. looked up one of the more obscure Latin words, consectetur. not simply random text. It has ots
              in a piece of classical Latin literature from 45 BC, making it over 2000 years od. Richard McClintock, a
              Latin professor making it over 2000 Lorem Ipsum comes from sections</p>
          </div>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are

          </p>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isn’t Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Richard McClintock, aatin professor at Hampden-Sydney College in Virginia.</p>

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
        name: 'BlogPost',
        components: {
            Copyright,
            Footer,
            CommonBanner,
            Navigation,

        },
    })
    export default class BlogPost extends Vue {

    }
</script>

<style scoped lang="scss">

  .single-post-area {

  }

  .single-post-header {
    h1 {
      font-family: $font-helvetica-bold;
      font-size: calc(28px + (28 - 16) * ((100vw - 300px) / (1600 - 300)));
    }
  }

  .post-meta {
    color: #3C3C3C;

    a {
      text-decoration: none;
      display: inline-block;
      color: #3C3C3C;
      font-size: 1.1rem;
    }
  }

  .single-post-text {
    overflow: hidden;
    margin-bottom: 5rem;

    p {
      font-family: $font-roboto;
      color: #3C3C3C;
      font-size: 1.2rem;
      line-height: 1.8em;
      text-align: justify;
    }

    img {
      width: auto;
      height: 40vh;
      object-fit: cover;
      -o-object-fit: cover;
      object-position: center;
      -o-object-position: center;
      display: inline-block;
      float: left;
      overflow: hidden;
      margin-right: 3rem;
      margin-bottom: 3rem;
    }
  }
</style>