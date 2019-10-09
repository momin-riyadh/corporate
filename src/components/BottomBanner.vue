<template>
  <div class="bottom-banner-area">
    <div class="container-fluid px-5-percent">
      <div class="bottom-banner">
        <img class="img-fluid" src="../assets/images/csr-bottom@2x.jpg" alt="">
        <div class="bottom-banner-text text-center">
          <h1>Enhance society and the
            environment of contributing
          </h1>
        </div>


        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="bottom-paragraph-text text-center">
              <p>SQUARE’s activity goes well beyond the sphere of business. As socially conscious and responsible
                corporate
                body SQUARE is committed to the
                improvement of the society as a whole. Meril-Prothom Alo festival sponsored by SQUARE, has become a
                national
                calendar event. SQUARE helps many
                NGO’s in their effort to make available healthcare to the disadvantage population of the country. It
                sponsors programs to build awareness on
                the healthcare need. SQUARE is also a major sponsor of sporting events in the country.</p>
            </div>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script lang="ts">

    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component({
        name: 'BottomBanner',
        components: {},
    })

    export default class BottomBanner extends Vue {

    }
</script>

<style scoped lang="scss">
  .bottom-banner-area{
    margin-bottom: 200px;
  }
  .bottom-banner {
    position: relative;
    height: 50vh;
    display: block;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .bottom-banner-text {
    max-width: 1024px;
    position: absolute;
    left: 50%;
    top: 40%;
    -webkit-transform: translate(-50%, -60%);
    -moz-transform: translate(-50%, -60%);
    -ms-transform: translate(-50%, -60%);
    -o-transform: translate(-50%, -60%);
    transform: translate(-50%, -60%);

    h1 {
      color: $white-color;
      font-size: calc(16px + (50 - 16) * ((100vw - 300px) / (1600 - 300)));;
    }

  }

  .bottom-paragraph-text {
    margin-top: -100px;
    background: #F4F4F4;
    padding: 4rem;
    color: $paragraph-color;
    font-size: $paragraph-size;
  }
</style>