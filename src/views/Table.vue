<template>
  <div class="gf-table-area mt-5 pt-5">
    <div class="container-fluid px-15-percent">
      <div class="row">
        <div class="col-12">

          <!--          Global Fairways Table-->
          <div class="gf-main-table table-responsive">
            <table class="gf-table text-center" border="1" bordercolor="#001A57">

              <!--              Start Table Header-->
              <thead>
              <tr>

                <th scope="col" class="px-4">
                  <!--                  Will be blank According to Style-->
                </th>

                <th scope="col" class="py-4">"E" Term
                  Origin
                </th>
                <th colspan="3">"F" Terms
                  Freight Charges Not Paid
                </th>
                <th colspan="4">"C" Terms
                  Freight Charges Paid
                </th>
                <th colspan="3">"D" Terms
                  Destination/Arrival
                </th>

              </tr>
              <tr>
                <td>Sales Terms</td>
                <td>
                  <h6>
                    EXW
                  </h6>
                  <small>
                    Ex-Works
                    (Place)
                  </small>
                </td>
                <td>
                  <h6>
                    FCA
                  </h6>
                  <small>
                    Face Carrier
                    (Place)
                  </small>
                </td>
                <td>
                  <h6>
                    FAS
                  </h6>
                  <small>
                    Free
                    Alongside Ship
                    (Port)
                  </small>
                </td>
                <td>
                  <h6>FOB</h6>
                  <small>
                    Free
                    On Board
                    (Port)
                  </small>
                </td>
                <td>
                  <h6>
                    CFR
                  </h6>
                  <small>
                    Cost & Freight
                    (Port)
                  </small>
                </td>
                <td>
                  <h6>
                    CIF
                  </h6>
                  <small>
                    Cost, Freight &
                    Insurance
                    (Port)
                  </small>
                </td>
                <td>
                  <h6>
                    CPT
                  </h6>
                  <small>
                    Carriage Paid
                    to (Place)
                  </small>
                </td>
                <td>
                  <h6>CIP</h6>
                  <small>
                    Carriage &
                    Insurance Paid
                    to (Place)
                  </small>
                </td>
                <td>
                  <h6>
                    DAT
                  </h6>
                  <small>
                    Delivered At
                    Terminal
                    (Place/Port)
                  </small>
                </td>
                <td>
                  <h6>
                    DAP
                  </h6>
                  <small>
                    Delivered At
                    Place (Place)
                  </small>
                </td>
                <td>
                  <h6>
                    DDP
                  </h6>
                  <small>
                    Delivered Duty
                    (Paid/Place)
                  </small>
                </td>
              </tr>
              </thead>
              <!--              End Table Head-->

              <!--              Start Table Body-->
              <tbody>


              <tr>
                <td class="px-5">Services</td>
                <td colspan="11" class="gf-red">
                  Responsibility & Charges
                </td>
              </tr>

              <tr v-for="v in 2">
                <td class="pl-5">
                  <p class="text-left">
                    Warehouse
                    Services
                  </p>

                </td>
                <td class="gf-seller" v-for="v in 11">Seller</td>

              </tr>

              <tr v-for="v in 8" class>
                <td class="pl-5">

                  <p class="text-left">
                    Warehouse Services
                  </p>

                </td>
                <td class="gf-buyer" v-for="v in 11">
                  buyer
                </td>
              </tr>

              <tr>
                <td>  </td>
                <td colspan="11" class="gf-red">
                  Risk/Responsibility Transfers
                </td>
              </tr>


              <tr class="new-bg">
                <td>
                  Risk Transfers
                </td>
                <td v-for="v in 11">
                  At Warehouse
                  Named Place
                </td>
              </tr>

              </tbody>
              <!--              End Table Body-->
            </table>
          </div>

          <!--            End Global Fairways Table-->


        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'Table',
        components: {}
    })
    export default class Table extends Vue {

    }
</script>

<style scoped lang="scss">

  .new-bg {
    background-color: #1e4264;
    color: #fff;
  }
  .gf-table {
    background-color: #fefefc;
    color: #001a57;
  }
  .gf-table p {
    margin-bottom: 0;
  }
  .gf-table thead > tr {
    border: 1px solid #001a57;
    background-color: #1e4264;
    color: #fff;
  }
  .gf-table td {
    padding: 0.4rem;
  }
  .gf-table tbody > tr {
    height: 60px;
  }
  .gf-table td {
    width: 200px;
  }
  .gf-table td:first-child {
    background-color: #1e4264;
    color: #fff;
  }
  .gf-red {
    background-color: #bd061b;
    color: #fff;
  }
  .gf-seller {
    background-color: #d8d8d8;
    color: #000;
    text-transform: capitalize;
  }
  .gf-buyer {
    background-color: #ffd190;
    color: #000;
    text-transform: capitalize;
  }
  .gf-table-area {
    width: 100%;
    margin: 0 auto;
  }
  .table-md-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .gf-table-area {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }


</style>