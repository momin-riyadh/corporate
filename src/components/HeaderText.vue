<template>
  <div class="header-content text-md-center">
    <h1>{{compData.title}}</h1>
    <p>
      {{compData.text}}
    </p>
    <router-link
      to="/about"
      class="video-btn"
    >Find Out More</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TitleTextCTABlock } from "../store/cms.types";

@Component({
  name: "HeaderText"
})
export default class HeaderText extends Vue {
  @Prop() compData!: TitleTextCTABlock;
}
</script>
<style lang="scss">
  .header-overlay {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
    opacity: 0.4;
  }

  .header-content {
    z-index: 2;
  }

  .header-content h1 {
    font-size: 36px;
    margin-bottom: 0;
    font-family: $font-helvetica-bold;
    @media (min-width: 1905px) {
      font-size: 50px;
    }
  }

  .header-content p {
    font-size: 0.9rem;
    display: block;
    padding-bottom: 1rem;
    font-family: $font-roboto;
    @media (min-width: 1905px) {
      font-size: 1.1rem;
      padding-bottom: 2rem;
    }
  }

  a.video-btn {
    transition: all 0.3s ease-in-out;
    border: 1px solid $brand-color;
    color: #fff;
    font-family: $font-roboto;
    font-weight: lighter;
    border-radius: 2px;
    font-size: 1.2rem;
    padding: 0.6rem 1rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: $brand-color;
    }
  }

</style>
