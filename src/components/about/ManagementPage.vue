<template>
  <div>
    <div class="management-content-area">

      <div class="management-content-header">
        <div class="sq-management-people-content">

          <h1>Samson H Chowdhury</h1>
          <h5>Founder Chairman</h5>

          <blockquote class="sq-blockquote">
            Samson H Chowdhury was born on 25 September, 1925. After completing education in
            India he returned to the then East Pakistan and settled at Ataikula village in Pabna district
            where his father was working as a Medical Officer in an outdoor dispensary.
          </blockquote>

          <router-link to="/management-profile">
            <el-button-group>
              <el-button type="primary">Learn More</el-button>
              <el-button type="primary"><i class="el-icon-plus"/></el-button>
            </el-button-group>
          </router-link>
        </div>
        <div class="sq-management-people float-right">
          <img alt="image" class="img-fluid" src="../../assets/images/chairman@2x.jpg">
        </div>
      </div>

      <h1 class="mt-5 mb-4 text-capitalize">board of directories</h1>
      <div class="row">
        <div class="b-of-d-area">

          <div class="b-of-d-list align-items-center">
            <div class="member-of-board" v-for="management in managements">
              <img class="img-fluid" :src="management.imageurl" alt="">

              <router-link to="/management-profile" class="view-management">
                <i class="el-icon-link"/>
              </router-link>

              <div class="b-of-d-caption">
                <div class="b-of-d-title">
                  <h3>{{management.name}}</h3>
                  <p>{{management.designation}}</p>
                </div>
<!--                <div class="b-of-d-link">-->
<!--                  <i class="el-icon-plus"/>-->
<!--                </div>-->

              </div>
            </div>
          </div>
        </div>

<!--        <div class="offset-square-logo">-->
<!--          <img src="../../assets/images/sq-logobg.svg" alt="">-->
<!--        </div>-->

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
        public managements: any = [
            {
                name: 'Mahamud Abbas',
                designation: 'Executive',
                imageurl: require('../../assets/images/dir_one@2x.jpg'),
            }, {
                name: 'Julkar Nayem',
                designation: 'Head of Idea',
                imageurl: require('../../assets/images/dir_two@2x.jpg'),
            }, {
                name: 'Alex Cross',
                designation: 'Field Engineer',
                imageurl: require('../../assets/images/dir_three@2x.jpg'),
            }, {
                name: 'Kashaf Martuza',
                designation: 'Serverside Engineer',
                imageurl: require('../../assets/images/dir_four@2x.jpg'),
            }, {
                name: 'Redowan Rabbi',
                designation: 'Executive',
                imageurl: require('../../assets/images/dir_five@2x.jpg'),
            }, {
                name: 'Mahamud Abbas',
                designation: 'Executive',
                imageurl: require('../../assets/images/dir_one@2x.jpg'),
            }, {
                name: 'Mahamud Abbas',
                designation: 'Executive',
                imageurl: require('../../assets/images/dir_one@2x.jpg'),
            }, {
                name: 'Julkar Nayem',
                designation: 'Head of Idea',
                imageurl: require('../../assets/images/dir_two@2x.jpg'),
            }, {
                name: 'Alex Cross',
                designation: 'Field Engineer',
                imageurl: require('../../assets/images/dir_three@2x.jpg'),
            }, {
                name: 'Kashaf Martuza',
                designation: 'Serverside Engineer',
                imageurl: require('../../assets/images/dir_four@2x.jpg'),
            }, {
                name: 'Redowan Rabbi',
                designation: 'Executive',
                imageurl: require('../../assets/images/dir_five@2x.jpg'),
            }, {
                name: 'Mahamud Abbas',
                designation: 'Executive',
                imageurl: require('../../assets/images/dir_one@2x.jpg'),
            },
        ];
    }
</script>

<style scoped lang="scss">
  .management-content-area {
    overflow: hidden;
    margin-left: 0;
    @media(min-width: 965px){
      margin-left: 3rem;
    }
  }

  .management-content-header {
    min-height: 400px;
    background: #222222;
    display: flex;
    flex-direction: column-reverse;
    @media(min-width: 961px){
      min-height: 400px;
      background: #222222;
      display: flex;
      flex-direction: row;
    }
  }

  .sq-management-people-content {
    padding: 3rem;
    flex-grow: 1;
    align-self: center;
    justify-self: flex-start;

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
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: auto;
      height: 450px;
      object-fit: cover;
      -o-object-fit: cover;
    }
  }


  /*board of directories list*/
  .b-of-d-list {
    display: flex;
    flex-wrap: wrap;
    flex:1;
  }

  .member-of-board {
    position: relative;
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

  .member-of-board{
    position: relative;
    &::before{
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: rgba(68, 185, 19, 0.5);
      -o-transition: all 0.4s ease;
      transition: all 0.4s ease;
      -webkit-transition: all 0.4s ease;
      -moz-transition: all 0.4s ease;
      -ms-transition: all 0.4s ease;
    }
    &:hover::before{
      opacity: 1;
    }

    &:hover{
      > .view-management{
        top:50%;
        opacity: 1;
      }
    }


    .view-management{
      position: absolute;
      left: 0;
      top: 70%;
      right: 0;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      color: #fff;
      font-size: 22px;
      width: 50px;
      height: 50px;
      margin: auto;
      border: 2px solid #ddd;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      -ms-border-radius: 50%;
      padding: .5rem .7rem;
      -o-transition: all 0.4s ease;
      transition: all 0.4s ease;
      -webkit-transition: all 0.4s ease;
      -moz-transition: all 0.4s ease;
      -ms-transition: all 0.4s ease;
      opacity: 0;
      z-index: 2;
    }

    &:hover{
      > .b-of-d-caption .b-of-d-title h3{
        color: $brand-color;
      }
    }


  }

  .b-of-d-caption {
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #EBEBEB;

    .b-of-d-link {
      background: $brand-color;

      i {
        font-size: 20px;
        color: $white-color;
        padding: 1.4em;
      }
    }



    .b-of-d-title {
      -o-transition: all 0.4s ease;
      transition: all 0.4s ease;
      -webkit-transition: all 0.4s ease;
      -moz-transition: all 0.4s ease;
      -ms-transition: all 0.4s ease;
      padding:10px 6px;
      position: absolute;
      bottom: 0;
      right:0;
      z-index: 1;
      width: 90%;
      background: #ffffff;
      text-align: center;
      h3 {
        -o-transition: all 0.4s ease;
        transition: all 0.4s ease;
        -webkit-transition: all 0.4s ease;
        -moz-transition: all 0.4s ease;
        -ms-transition: all 0.4s ease;
        margin-bottom: 5px;
        line-height: 1;
        font-size: 1.6rem;
      }

      p {
        margin-bottom: 0;
        font-size: 1rem;
      }
    }
  }

  .offset-square-logo{
    position: absolute;
    left: 0;
    top:15%;
    img{
      width: 100px;
      height: auto;
    }
  }

</style>
