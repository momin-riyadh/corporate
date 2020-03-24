import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

// @ts-ignore
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
            component: () => import(/* webpackChunkName: "about" */ './components/CareerDetails.vue'),
        },
        {
            path: '/career-list',
            name: 'career-list',
            component: () => import(/* webpackChunkName: "about" */ './components/CareerList.vue'),
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
            component: () => import(/* webpackChunkName: "about" */ './components/about/About.vue'),
        },
        {
            path: '/corporate-governance',
            name: 'corporate-governance',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/CorporateGovernances.vue'),
        },

        {
            path: '/about-details',
            component: () => import('./components/about/AboutLayout.vue'),
            children: [
                {path: '/', component: () => import('./components/about/HistoryPage.vue')},
                {path: '/philosophy', component: () => import('./components/about/PhilosophyPage.vue')},
                {path: '/management', component: () => import('./components/about/ManagementPage.vue')},
                {path: '/management-profile', component: () => import('./components/about/ManagementProfile.vue')},
                {path: '/achievement', component: () => import('./components/about/AchievementsPage.vue')},
            ],
        },

        {
            path: '/stock-information',
            name: 'stock-information',
            component: () => import('./components/investors/StockInformation.vue'),
        },

        {
            path: '/corporate-responsibility',
            name: 'corporate-responsibility',
            component: () => import('./components/responsibility/CorporatesResponsibility.vue'),
        },

        {
            path: '/environment-responsibility',
            name: 'environment-responsibility',
            component: () => import('./components/responsibility/EnvironmentalResponsibility.vue'),
        },
        {
            path: '/welfare',
            name: 'welfare',
            component: () => import('./components/responsibility/EmployeesWelfare.vue'),
        },
        {
            path: '/compliance',
            name: 'compliance',
            component: () => import('./components/responsibility/Compliance.vue'),
        },
    ],
});
