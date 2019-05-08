<template>
    <div>
        <jp-com-mode id="demo" title="$.extend有哪些功能">
        </jp-com-mode>
        <jp-com-mode title="$.extend()源码解读">
        </jp-com-mode>
    </div>
</template>

<script>
/* eslint-disable */
import VueMarkdown from 'vue-markdown'
import MarkdownMd from './index.md'
require('./JPQ')
export default {
    name: 'mod-js',
    components: {
        VueMarkdown
    },
    data () {
        return {
            source: MarkdownMd
        }
    },
    created() {

    },
    mounted () {
        // 为什么 vue使用dDOMContentLoaded无效呢。
        this.$nextTick( () => {
            this.test();
        })

    },
    methods: {
        test () {
            var arr = [1,2,3,4];
            var obj = {name: 'xjp',author: 'silent'};
            $.each(arr,function (key,value) {
                console.log(key,value)
            })
            $(function(){
                console.log("加载完毕")
            })
        }

    }
}

</script>

<style scoped>

</style>
