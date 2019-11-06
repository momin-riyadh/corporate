<template>
  <div>
    <div class="management-content-area ml-0 ml-md-5">

      <div class="management-content-header">
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
        <div class="sq-management-people float-right">
          <img alt="image" class="img-fluid" src="../../assets/images/chairman@2x.jpg">
        </div>
      </div>

      <h1 class="my-5 text-capitalize">board of directories</h1>
      <div class="row">
        <div class="b-of-d-area">

          <div class="b-of-d-list align-items-center">
            <div class="member-of-board" v-for="management in managements">
              <img class="img-fluid" :src="management.imageurl" alt="">
              <div class="b-of-d-caption">
                <div class="b-of-d-title">
                  <h3>{{management.name}}</h3>
                  <p>{{management.designation}}</p>
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
  }

  .management-content-header {
    min-height: 400px;
    background: #222222;
    display: flex;
  }

  .sq-management-people-content {
    padding: 4rem;
    flex-grow: 1;

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

  .b-of-d-caption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #EBEBEB;

    .b-of-d-link {
      background: $brand-color;

      i {
        font-size: 20px;
        color: $white-color;
        padding: 1.7em;
      }
    }

    .b-of-d-title {
      padding:0 0.8rem;

      h3 {
        margin-bottom: 5px;
        line-height: 1;
      }

      p {
        margin-bottom: 0;
      }
    }
  }

</style>