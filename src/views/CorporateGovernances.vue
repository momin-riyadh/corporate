<template>
  <div class="corporate-governance-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/cg@2x.jpg')"
                  banner-title="Corporate Governance" banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>

    <div class="container-fluid px-15-percent my-5 py-3">
      <!--      Accordion Component From Elements UI-->
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="Committee Charters" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and
            habits that the users are used to;
          </div>
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and
            habits that the users are used to;
          </div>
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and
            habits that the users are used to;
          </div>
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and
            habits that the users are used to;
          </div>

        </el-collapse-item>
        <el-collapse-item title="Corporate Governance Documents" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and
            interactive
            effects;
          </div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </el-collapse-item>
        <el-collapse-item title="Code of Business Conduct and Ethics & Reporting Concerns" name="3">
          <div>Simplify the process: keep operating process simple and intuitive;</div>
          <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make
            decisions;
          </div>
          <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees
            them
            from memorizing and recalling.
          </div>
        </el-collapse-item>
      </el-collapse>

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
        name: 'CorporateGovernance',
        components: {Copyright, Footer, CommonBanner, Navigation},

    })
    export default class CorporateGovernances extends Vue {
        public data() {
            return {
                activeName: '1',
            };
        }
    }
</script>

<style scoped>

</style>