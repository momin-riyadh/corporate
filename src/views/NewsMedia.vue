<template>
  <div class="sq-news-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/news@2x.jpg')" banner-title="News & Media"
                  banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>

    <!--    News/Media Main Component-->

    <div class="container-fluid px-5-percent">
      <div class="row">
        <div class="sq-news-media-main align-items-center">
          <div class="news-media-thumbnail" v-for="v in 8">
            <img class="img-fluid" src="../assets/images/news-one@2x.jpg" alt="square">
            <div class="news-media-caption my-4">
              <h5>We strive to go above and
                beyond for our clients, foster</h5>
              <p>We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence
                and honesty. Maybe it's our family orientation</p>
              <a href="">read more</a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mb-5">
        <el-pagination
                background
                layout="prev, pager, next"
                :total="30">
        </el-pagination>
      </div>
    </div>

    <!--    Footer Component-->
    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import Navigation from '@/components/Navigation.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Footer from '@/components/Footer.vue';
    import Copyright from '@/components/Copyright.vue';

    @Component({
        name: 'NewsMedia',
        components: {Copyright, Footer, CommonBanner, Navigation},
    })
    export default class NewsMedia extends Vue {

    }
</script>

<style scoped lang="scss">
  .sq-news-media-main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .news-media-thumbnail {
    width: calc(100% - 30px);
    margin: 0 15px 30px 15px;
    flex-shrink: 0;
    align-self: flex-start;
    @media (min-width: 575px) {
      width: calc(50% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 991px) {
      width: calc(25% - 50px);
      margin: 0 25px 50px;
    }
    /*@media (min-width: 1440px) {*/
    /*  width: calc(25% - 30px);*/
    /*  margin: 0 15px 30px;*/
    /*}*/
  }

  .news-media-caption {
    h5 {
      font-family: $font-helvetica-bold;
      color: #3c3c3c;
    }

    p {
      color: #6D6D6D;
      font-size: 1rem;
      font-family: $font-roboto;
    }

    a {
      transition: all 0.3s ease-in-out;
      padding: .8rem 2rem;
      background: $brand-color;
      text-decoration: none;
      color: $white-color;
      text-transform: capitalize;
      border-radius: 2px;
      display: inline-block;
      font-family: $font-roboto;
      font-weight: bold;
    }
  }
</style>