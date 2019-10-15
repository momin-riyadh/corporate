import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue'),
        },
        {
            path: '/business',
            name: 'business',
            component: () => import(/* webpackChunkName: "about" */ './views/Business.vue'),
        },
        {
            path: '/career',
            name: 'career',
            component: () => import(/* webpackChunkName: "about" */ './views/Career.vue'),
        },
        {
            path: '/career-details',
            name: 'career-details',
            component: () => import(/* webpackChunkName: "about" */ './views/CareerDetails.vue'),
        },
        {
            path: '/business-details',
            name: 'business-details',
            component: () => import(/* webpackChunkName: "about" */ './views/BusinessDetails.vue'),
        },
        {
            path: '/annual-report',
            name: 'annual-report',
            component: () => import(/* webpackChunkName: "about" */ './views/AnnualReport.vue'),
        },
        {
            path: '/financial-information',
            name: 'financial-information',
            component: () => import(/* webpackChunkName: "about" */ './views/FinancialInformation.vue'),
        },
        {
            path: '/news',
            name: 'newsmedia',
            component: () => import(/* webpackChunkName: "about" */ './views/NewsMedia.vue'),
        },
        {
            path: '/post',
            name: 'blogpost',
            component: () => import(/* webpackChunkName: "about" */ './views/BlogPost.vue'),
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
    ],
});
