<template>
    <div>
        <jp-com-mode title="$.extend有哪些功能">
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
       this.testDeepClone();
       this.testExtendProto();
    },
    methods: {
        // 深拷贝测试
        testDeepClone () {
            let obj = {
                a: 'a',
                authods: {
                    web: 'xjp',
                    php: 'silent'
                },
                fireds: ['x', 'j', 'p']
            };
            let obj1 = {
                authods: {
                    node: 'sang'
                },
                fireds: ['x1', 'j2']
            };
            $.extend(true, obj,obj1);
            console.log(obj)
        },
        // 浅拷贝
        testClone () {
            let a = {
                a: 'a'
            };
            let b = {
                b: 'b'
            };
            let obj = {
                author: 'xjp'

            };
            let obj1 = $.extend(obj,a,b);
            console.log(obj === obj1,obj)
        },
        say () {
            console.log(this.constructor)
        },
        testExtendProto () {
            $.extend({
                say: function () {
                    console.log(this.constructor, 111)
                }
            })
            $.say();
            console.log($)
        }
    }

}
</script>

<style scoped>

</style>
