<template>
  <div class="about-layout-area">

    <div class="management-bg container-fluid px-5-percent mb-5">
      <div class="sq-about-content-area">

        <!-- About Tab -->
        <div class="sq-a-left-sidebar">
          <ul>
            <li>
              <router-link to="/about-details">Who We are</router-link>
            </li>
            <li>
              <router-link to="/philosophy">Mission, Vision & Values</router-link>
            </li>
            <li>
              <router-link to="/achievement">Achievements</router-link>
            </li>
            <li>
              <router-link to="/management">Management</router-link>
            </li>
          </ul>
        </div>

        <!-- End About Tab -->

        <!-- About Page Data-->
        <div class="sq-a-page-content">
<!--          <router-view/>-->
        </div>
        <!-- End About Page Data-->
      </div>
    </div>


  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {AboutTabBlock} from '@/store/cms.types';
    import {HOST} from '@/global';

    @Component({
        name: 'AboutTab',
        components: {},
    })

    export default class AboutTab extends Vue {
        @Prop() compData!: AboutTabBlock;
        HOST: string = HOST;

        // current = 0;
        // current_image_number = 0;
        //
        // // current_img = 0;
        //
        //
        // itemClick(index: any) {
        //     if ((this as any).current == index) {
        //         (this as any).current = 0
        //     } else {
        //         (this as any).current = index
        //     }
        // }

    }
</script>

<style scoped lang="scss">
  .management-bg {
    padding-top: 5rem;
    margin-top: -5rem;
    background: url("/../assets/images/management_bg.png") repeat scroll 0 0;
  }

  .about-layout-area{
    overflow: hidden;
  }

  .sq-about-content-area {
    display: flex;
    flex-direction: column;
    min-height: auto;
    @media(min-width: 965px) {
      display: flex;
      flex-direction: row;
      min-height: 400px
    }
  }

  .sq-a-left-sidebar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 120px;
    @media(min-width: 965px) {
      width: 15vw;
      max-width: 450px;
      flex-shrink: 0;
    }

    ul {
      transition: all 0.3s ease-in-out;
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: center;
      @media(min-width: 965px) {
        margin: 0;
        padding: 0;
        display: block;
        list-style: none;
        text-align: left;
      }

      li {
        display: inline-block;
        @media(min-width: 965px) {
          float: left;
          margin-bottom: 1.2rem;
          width: 100%;
        }

        a {
          transition: all 0.3s ease-in-out;
          font-family: $font-helvetica-bold;
          color: #333333;
          text-decoration: none;
          font-size: .9rem;
          line-height: .9rem;
          width: 100%;
          display: block;
          padding: 1rem;
          @media all and (min-width: 1905px) {
            font-size: 1.3rem;
            line-height: 1.3rem;
          }

          &:hover {
            background: #F0F0F0;
            border-bottom: 4px solid $brand-color;
            @media (min-width: 965px) {
              border-left: 4px solid $brand-color;
              border-bottom: 0;
            }
          }

          &.router-link-exact-active {
            background: transparent;
            border-bottom: 4px solid $brand-color;
            @media (min-width: 965px) {
              background: #F0F0F0;
              border-left: 4px solid $brand-color;
              border-bottom: 0;
            }
          }
        }
      }
    }
  }

  .sq-a-page-content {
    overflow: hidden;
  }

</style>
