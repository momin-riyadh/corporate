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
            component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
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
            path: '/apply',
            name: 'apply',
            component: () => import(/* webpackChunkName: "about" */ './views/ApplyForm.vue'),
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
            component: () => import(/* webpackChunkName: "about" */ './views/about/About.vue'),
        },
        {
            path: '/corporate-governance',
            name: 'corporate-governance',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/CorporateGovernances.vue'),
        },

        {
            path: '/about-details',
            component: () => import('./views/about/AboutLayout.vue'),
            children: [
                {path: '/', component: () => import('./views/about/HistoryPage.vue')},
                {path: '/philosophy', component: () => import('./views/about/PhilosophyPage.vue')},
                {path: '/management', component: () => import('./views/about/ManagementPage.vue')},
            ],
        },

        {
            path: '/stock-information',
            name: 'stock-information',
            component: () => import('./views/investors/StockInformation.vue'),
        },

        {
            path: '/corporate-responsibility',
            name: 'corporate-responsibility',
            component: () => import('./views/responsibility/CorporatesResponsibility.vue'),
        },
    ],
});
