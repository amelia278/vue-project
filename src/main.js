'use strict';

import Vue from 'vue';

import VueRouter from 'vue-router';
//install plugin
Vue.use(VueRouter);

import './assets/css/global.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);
//global component
import NavBar from './components/common/navBar.vue';
Vue.component('nav-bar',NavBar);

//import local 
import App from './app.vue';
import Home from './components/home/home.vue';
let router = new VueRouter({
    linksActiveClass:'mui-active',
    routes:[
        {path:'/',redirect:{name:'home'}},
        {path:'/home',name:'home',component:Home}
    ]
});

// create vue instance
new Vue({
    el:'#app',
    router,
    render:c=>c(App)
});