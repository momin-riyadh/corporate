<template>
  <div class="sq-home-area">
    <NavigationCard type="customstyle" />
    <div class="home-page-animation-area overflow-hidden">
      <div class="home-page-animation">
        <header class="v-header containers">
          <component
            v-for="comp in pageData.header"
            :key="comp.id"
            :is="comp.type"
            :comp-data="comp.value"
          ></component>

        </header>
      </div>
    </div>

    <OppertunityCard />
    <MissionCard />
    <ComplianceCard />
    <NewssliderCard />
    <FooterCard />
    <CopyrightCard />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import NavigationCard from "@/components/NavigationCard.vue";
import FooterCard from "@/components/FooterCard.vue";
import CopyrightCard from "@/components/CopyrightCard.vue";
import CommonBanner from "@/components/CommonBanner.vue";
import VideoCard from "@/components/VideoCard.vue";
import OppertunityCard from "@/components/OppertunityCard.vue";
import MissionCard from "@/components/MissionCard.vue";
import ComplianceCard from "@/components/ComplianceCard.vue";
import NewssliderCard from "@/components/NewssliderCard.vue";
import { HomePageData } from "../store/cms.types";
import HeaderText from "../components/HeaderText.vue";

@Component({
  name: "HomePage",
  components: {
    NewssliderCard,
    ComplianceCard,
    MissionCard,
    OppertunityCard,
    youtube_video_block: VideoCard,
    title_text_cta: HeaderText,
    CommonBanner,
    FooterCard,
    CopyrightCard,
    NavigationCard
  }
})
export default class HomePage extends Vue {
  @Prop() pageData!: HomePageData;
}
</script>

<style lang="scss"></style>
