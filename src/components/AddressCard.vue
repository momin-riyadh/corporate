<template>
  <div class="sq-address-area text-center">
    <div class="sq-address-title">
      <h3>Contact information</h3>
    </div>

    <div class="sq-address text-left p-3">

      <address>
        <div>
          <h4>Head Office</h4>
          Sonartari Tower (11th Floor) <br/>
          12, Sonargaon Road <br/>
          Dhaka-1000 <br/>
          Phone: 8802-9632730-1 <br/>
          Fax: 8802-9632733, 8623053
        </div>

      </address>
    </div>
  </div>

</template>

<script lang="ts">
    export default {
        name: "AddressCard"
    }
</script>

<style scoped lang="scss">
  /*Right Address Area*/
  .sq-address-area {
    color: $white-color;
    flex-shrink: 0;
    width: 100%;
    background-image: url("../assets/images/sq-logobg.svg");
    background-position: right bottom;
    background-size: 200px 200px;
    background-repeat: no-repeat;
    background-color: $brand-color;
    background-blend-mode: multiply;
    margin-bottom: 30px;
    @media all and (min-width: 961px) {
      width: 400px;
      margin-bottom: 0;
    }
  }

  .sq-address-title {
    min-height: 80px;
    background: darken($brand-color, 10%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    h3 {
      margin: 0;
      padding: 0;
      line-height: 1;
      font-family: $font-helvetica-bold;
      font-size: calc(22px + (22 - 18) * ((100vw - 300px) / (1600 - 300)));
    }
  }

  .sq-address {
    address {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
</style>