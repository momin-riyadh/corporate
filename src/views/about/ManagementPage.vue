<template>
  <div class="management-content-area ml-0 ml-md-5">
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
    height: 400px;
    overflow: hidden;
    background: #222222;
  }

  .sq-management-people-content{
    padding: 4rem;
    h1{
      color:$white-color;
      font-family: $font-roboto;

    }
    h5{
      color:$white-color;
      font-family: $font-roboto;
    }

    blockquote{
      display:block;
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
</style>