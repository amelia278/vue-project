<template>
    <div class="home">
        <vue-editor class="editor" v-model="content"></vue-editor>
        <button class="btn" @click="sumbit()">
            submit
        </button>
    </div>   
</template>
<script type="text/babel">
    import { VueEditor } from "vue2-editor";

    export default {
        name: 'home',

        components: {
            VueEditor
        },

        data() {
            return {
                content: null
            }
        },

        methods: {
            submit() {
                // 接口 this.content 传入
            }
        }
    }
</script>

<style>
    .home 
        .editor {
            position: relative;
            margin: 0 auto;
            max-width: 80vw;
        }

        .ql-container {
            max-height: 600px;
        }
        
        .btn {
            margin-top: 30px;
            margin-left: 200px;
            height: 30px;
            width: 100px;
        }
</style>
