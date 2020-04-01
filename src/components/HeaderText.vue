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
