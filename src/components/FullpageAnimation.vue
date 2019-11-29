<template>
    <div class="home-page-animation-area overflow-hidden">
        <div class="home-page-animation">
            <header class="v-header containers">
                <div class="fullscreen-video-wrap">
                    <video src="../assets/images/video/sqbg.mp4" autoplay="autoplay" loop="loop" muted>
                    </video>
                </div>
                <div class="header-overlay"></div>
                <div class="header-content text-md-center">
                    <h1>Welcome to Square Group</h1>
                    <p>SQUARE today symbolizes a name – a state of mind. But its journey to the growth and prosperity
                        has been no
                        bed of roses. From the inception in 1958, it has today burgeoned into one of the top line
                        conglomerates in
                        Bangladesh.</p>
                    <router-link to="/about" class="video-btn">Find Out More</router-link>
                </div>
            </header>
            <!--      <img src="../assets/images/h-banner-two.jpg" alt="">-->
            <!--      <div class="home-page-animation-caption">-->
            <!--        <h1>Square Pharmaceuticals LTD</h1>-->
            <!--        <p>Largest pharmaceutical company in Bangladesh</p>-->
            <!--      </div>-->
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'FullpageAnimation',
        components: {}
    })
    export default class FullpageAnimation extends Vue {

    }
</script>

<style scoped lang="scss">
    .home-page-animation {
        position: relative;
        height: calc(100vh);

        &::before {
            width: 100%;
            height: 100%;
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 0%);
            z-index: 2;
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            object-position: center center;
            position: relative;

        }
    }

    .home-page-animation-caption {
        z-index: 3;
        position: absolute;
        left: 5%;
        bottom: 15%;

        h1 {
            font-family: $font-helvetica-bold;
            color: $white-color;
            font-size: calc(24px + (55 - 24) * ((100vw - 300px) / (1600 - 300)));
        }

        p {
            color: $white-color;
            font-size: calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
        }
    }

    .v-header {
        height: 100vh;
        display: flex;
        align-items: center;
        color: #fff;
    }

    .containers {
        max-width: 960px;
        padding-left: 1rem;
        padding-right: 1rem;
        margin: auto;
        text-align: center;
    }

    .fullscreen-video-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .fullscreen-video-wrap video {
        min-height: 100%;
        min-width: 100%;
        @media (min-aspect-ratio: 16/9) {
            width: 100%;
            height: auto;
        }
        @media (max-aspect-ratio: 16/9) {
            width: auto;
            height: 100%;
        }
    }

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
        @media(min-width: 1905px) {
            font-size: 50px;
        }
    }

    .header-content p {
        font-size: .9rem;
        display: block;
        padding-bottom: 1rem;
        font-family: $font-roboto;
        @media(min-width: 1905px) {
            font-size: 1.1rem;
            padding-bottom: 2rem;
        }
    }

    .video-btn {
        transition: all 0.3s ease-in-out;
        border: 1px solid $brand-color;
        color: #fff;
        font-family: $font-roboto;
        font-weight: lighter;
        border-radius: 2px;
        font-size: 1.2rem;
        padding: .6rem 1rem;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background: $brand-color;
        }
    }

    .section {
        padding: 20px 0;
    }

    .section-b {
        background: #333;
        color: #fff;
    }

    @media(max-width: 960px) {
        .containers {
            padding-right: 3rem;
            padding-left: 3rem;
        }
    }
</style>
