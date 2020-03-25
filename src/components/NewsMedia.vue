<template>
  <div class="sq-news-area">
    <Navigation/>
    <CommonBanner v-bind:image-url="require('../assets/images/news@2x.jpg')" banner-title="News & Media"
                  banner-subtitle="Employee welfare entails everything from services, facilities and benefits that are provided or done by an employer
 for the advantage or comfort of an employee. It is undertaken in order to"/>


    <SinglenewsCard/>
    <!--    Footer Component-->
    <Footer/>
    <Copyright/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import Navigation from '@/components/NavigationCard.vue';
    import CommonBanner from '@/components/CommonBanner.vue';
    import Footer from '@/components/FooterCard.vue';
    import Copyright from '@/components/CopyrightCard.vue';
    import SinglenewsCard from "@/components/SinglenewsCard.vue";

    @Component({
        name: 'NewsMedia',
        components: {SinglenewsCard, Copyright, Footer, CommonBanner, Navigation},
    })
    export default class NewsMedia extends Vue {
        public articles: any = [
            {
                title: 'We strive to go above and beyond for our clients, foster',
                text: 'We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence and honesty. Maybe it\'s our family orientation',
                imageurl: require('../assets/images/news-one@2x.jpg'),
            },
            {
                title: 'We strive to go above and beyond for our clients, foster',
                text: 'We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence and honesty. Maybe it\'s our family orientation',
                imageurl: require('../assets/images/news-two@2x.jpg'),
            },
            {
                title: 'We strive to go above and beyond for our clients, foster',
                text: 'We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence and honesty. Maybe it\'s our family orientation',
                imageurl: require('../assets/images/news-three@2x.jpg'),
            },
            {
                title: 'We strive to go above and beyond for our clients, foster',
                text: 'We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence and honesty. Maybe it\'s our family orientation',
                imageurl: require('../assets/images/news-four@2x.jpg'),
            },
            {
                title: 'We strive to go above and beyond for our clients, foster',
                text: 'We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence and honesty. Maybe it\'s our family orientation',
                imageurl: require('../assets/images/news-five@2x.jpg'),
            },
            {
                title: 'We strive to go above and beyond for our clients, foster',
                text: 'We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence and honesty. Maybe it\'s our family orientation',
                imageurl: require('../assets/images/news-six@2x.jpg'),
            }, {
                title: 'We strive to go above and beyond for our clients, foster',
                text: 'We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence and honesty. Maybe it\'s our family orientation',
                imageurl: require('../assets/images/news-three@2x.jpg'),
            },
            {
                title: 'We strive to go above and beyond for our clients, foster',
                text: 'We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence and honesty. Maybe it\'s our family orientation',
                imageurl: require('../assets/images/news-four@2x.jpg'),
            },
            {
                title: 'We strive to go above and beyond for our clients, foster',
                text: 'We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence and honesty. Maybe it\'s our family orientation',
                imageurl: require('../assets/images/news-five@2x.jpg'),
            },
            {
                title: 'We strive to go above and beyond for our clients, foster',
                text: 'We strive to go above and beyond for our clients, fostering a relationship built on trust, confidence and honesty. Maybe it\'s our family orientation',
                imageurl: require('../assets/images/news-six@2x.jpg'),
            },
        ];
    }
</script>

<style scoped lang="scss">
</style>
