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
    mounted () {
        this.testExec();
        this.testMarkArray('xjp', 'silent');
        this.testSelector()

    },
    methods: {
        testExec() {
            let reg = /^(\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            let rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            let str = '#demo';
            let match = reg.exec(str);
            let match2 = rquickExpr.exec(str);
            console.log(match, match2)

        },
        testMarkArray () {
            let arr = $.markArray(arguments);
            let len = arguments.length;
            arr.push(1)
            console.log(arr)
        },
        testSelector () {
            let html = $('<div>你好，世界</div>');
            let demo = $(document)
            console.log(html);
            console.log(demo)
        }

    }
}
</script>

<style scoped>

</style>
