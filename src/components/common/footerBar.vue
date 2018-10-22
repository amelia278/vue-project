<template>
    <div>
        <mt-tabbar>
            <mt-tab-item v-for='tab in tabs' :key='tab'>
                {{tab}}
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                tabs:['首页','视频','讲讲','我的']
            }
        }
    }
</script>
<style>
</style>