import GoogleMapsLoader from "google-maps*";
<template>
  <!--    Custom Google Maps Api Integrations-->
  <div class="container-fluid px-5-percent ">
    <div class="sq-map-area overflow-hidden">
      <div class="sq-map-form">
        <h5>Select Industry <i> (Optional) </i></h5>
        <div class="sq-select-industry">
          <el-select v-model="value" placeholder="Square Group">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div id="sq-map" class="google-map" ref="googleMap"></div>
    </div>


  </div>
  <!--    End Custom Google Maps Api Integrations-->
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import GoogleMapsLoader from 'google-maps';

  @Component({
      name:'MapCard',
      components:{},
  })

    export default class MapCard extends Vue{

      public handleClick() {
      }

      public data() {
          return {
              options: [{
                  value: 'ind_one',
                  label: 'Square Head Office '
              }, {
                  value: 'Ind_two',
                  label: 'Square Pharmaceuticals'
              }, {
                  value: 'Ind_three',
                  label: 'Square Veterinary'
              }
              ],
              value: ''
          }
      }

      public mounted() {
          GoogleMapsLoader.load(function (google: any) {
              const map = new google.maps.Map(document.getElementById('sq-map'), {
                      zoom: 18,
                      center: new google.maps.LatLng(21.139808079490507, 79.07690763473511),
                  },
              );
          });
      }
    }
</script>

<style scoped lang="scss">
  /*Maps Dropdown*/
  .el-button-group {
    .el-button {
      display: block;
      width: 100%;
    }
  }

  .el-dropdown {
    vertical-align: top;
  }

  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }

  .el-icon-arrow-down {
    font-size: 14px;
  }

  .sq-map-area {
    position: relative;
    z-index: 2;
    padding: 1rem;
    background: #EFEFEF;
    margin-bottom: 3.5rem;
    @media(min-width: 601px) {
      position: relative;
      z-index: 2;
      padding: 3rem;
      background: #EFEFEF;
      margin-bottom: 3.5rem;
    }

  }

  #sq-map {
    height: 500px;
    max-width: 100%;
    display: block;
  }

  .sq-map-form {
    width: 100%;
    margin: 0 0 .5rem 0;
    padding: 1rem;
    background: #2C2C2C;
    position: static;
    border-radius: 1px;
    @media(min-width: 601px) {
      position: absolute;
      max-width: 500px;
      left: 3rem;
      bottom: auto;
      top: 3rem;
      right: auto;
      margin: 1.5rem;
      padding: 1.8rem;
      z-index: 3;
    }

    h1 {
      color: $white-color;
      font-family: $font-helvetica-bold;
      margin-bottom: 1rem;
    }

    h5 {
      color: $white-color;
      font-family: $font-helvetica-bold;
      margin-bottom: 1rem;

      i {
        font-size: medium;
        font-weight: normal;
        font-family: $font-roboto;
      }
    }
  }

  .map-radio {
    background: #222222;
    padding: 1rem .7rem;
  }

  /*Contact Form Select Button Style*/
  .sq-select-industry {
    .el-select {
      display: block;
    }
  }

  /*Contact Form Select Button Style*/
</style>