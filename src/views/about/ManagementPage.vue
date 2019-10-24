<template>
  <div>
    <div class="management-content-area ml-0 ml-md-5">

      <div class="management-content-header">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6 col-xl-7">
            <div class="sq-management-people-content">

              <h1>Samson H Chowdhury</h1>
              <h5>Founder Chairman</h5>

              <blockquote class="sq-blockquote">
                Samson H Chowdhury was born on 25 September, 1925. After completing education in
                India he returned to the then East Pakistan and settled at Ataikula village in Pabna district
                where his father was working as a Medical Officer in an outdoor dispensary.
              </blockquote>

              <el-button-group>
                <el-button type="primary">Learn More</el-button>
                <el-button type="primary"><i class="el-icon-plus"></i></el-button>
              </el-button-group>
            </div>

          </div>

          <div class="col-12 col-md-8 col-lg-4 col-xl-5 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0">
            <div class="sq-management-people float-right">
              <img alt="image" class="img-fluid" src="../../assets/images/chairman@2x.jpg">
            </div>
          </div>

        </div>
      </div>

      <h1 class="my-5 text-capitalize">board of directories</h1>
      <div class="row">
        <div class="b-of-d-area">

          <div class="b-of-d-list align-items-center">
            <div class="member-of-board" v-for="v in 10">
              <img class="img-fluid" src="../../assets/images/dir_one@2x.jpg" alt="">
              <div class="b-of-d-caption mt-3">
                <div class="b-of-d-title">
                  <h3>Amith Richard</h3>
                  <p>Executive Chairman</p>
                </div>
                <div class="b-of-d-link">
                  <i class="el-icon-plus"></i>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'ManagementPage',
        components: {},

    })
    export default class ManagementPage extends Vue {

    }
</script>

<style scoped lang="scss">
  .management-content-area {
    overflow: hidden;
  }

  .management-content-header {
    height: 400px;
    background: #222222;
  }

  .sq-management-people-content {
    padding: 4rem;

    h1 {
      color: $white-color;
      font-family: $font-roboto;

    }

    h5 {
      color: $white-color;
      font-family: $font-roboto;
    }

    blockquote {
      display: block;
      color: $white-color;
      border-left: .275rem solid $brand-color;
      font-family: $font-roboto;
      padding-left: 2rem;
      font-size: 1rem;
      font-weight: 100;
      margin: 2rem 0 2rem 1.5rem;
    }

  }

  .sq-management-people {
    img {
      width: auto;
      height: 400px;
      object-fit: cover;
      -o-object-fit: cover;
    }
  }


  /*board of directories list*/
  .b-of-d-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .member-of-board {
    width: calc(100% - 30px);
    margin: 0 15px 30px 15px;
    @media (min-width: 575px) {
      width: calc(50% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 1265px) {
      width: calc(33.3333% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 1905px) {
      width: calc(25% - 30px);
      margin: 0 15px 30px;
    }
    @media (min-width: 2400px) {
      width: calc(20% - 30px);
      margin: 0 15px 30px;
    }
  }

  .b-of-d-caption{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#EBEBEB;
    .b-of-d-link{
      background: $brand-color;
      i{
        font-size: 20px;
        color: $white-color;
        padding: 1.7em;
      }
    }
    .b-of-d-title{
      padding: .8rem .5rem 0;
    }
  }

</style>