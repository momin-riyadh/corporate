<template>
  <div class="single-post-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/news@2x.jpg')" banner-title="News & Media"
                  banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>

   <SinglePost/>


    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from '@/components/NavigationCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Footer from '@/components/FooterCard.vue';
    import Copyright from '@/components/CopyrightCard.vue';
    import SinglePost from "@/components/SinglePost.vue";

    @Component({
        name: 'BlogPost',
        components: {
            SinglePost,
            Copyright,
            Footer,
            CommonBanner,
            Navigation,

        },
    })
    export default class BlogPost extends Vue {

    }
</script>

<style scoped lang="scss">
</style>