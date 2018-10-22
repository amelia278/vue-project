'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
//install plugin
Vue.use(VueRouter);

import './assets/css/global.css';
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

//global component
import NavBar from './components/common/navBar.vue';
import FootBar from './components/common/footerBar.vue';
Vue.component('nav-bar',NavBar);
Vue.component('foot-bar',FootBar);

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