<template>
    <div>
        <mt-header fixed title=''>
            <!--<mt-p>欢迎你{{name}}</mt-p>-->
            <router-link to='' slot='right'>
                <mt-button>登录</mt-button>
            </router-link>
            <router-link to='' slot='right'>
                <mt-button>注册</mt-button>
            </router-link>
        </mt-header>
        <!-- <nav-bar></nav-bar> -->
        <router-view></router-view>
        <!--footer-->
        <!-- <router-link :to="{name:'home'}">
        </router-link> -->
        <foot-bar></foot-bar>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                name:"yaya"
            }
        }
    }
</script>
<style>

</style>