<template>
    <div>
        <jp-com-mode title="宏任务|微任务">

            <div>前段时间在csdn上看到了一篇文章，介绍宏任务与微任务的。感觉自己对js的理解又加深了，分享出来</div>
            <div >
                分享链接： https://blog.csdn.net/qq_30376375/article/details/82990588
            </div>
            <div>
                <p>首页，什么是宏任务，什么 是微任务。</p>
                <p> 宏任务有Event Table(任务列表)、Event Queue（任务队列），微任务有Event Queue（任务队列）</p>
                <p> 1.宏任务：包括整体代码script，setTimeout，setInterval；</p>
                <p>2.微任务：Promise，process.nextTick， Promise会立即执行，但是他的then,catch……方法会在nextTick后执行</p>
            </div>
            <div>
                <p>注：Promise立即执行，then函数分发到微任务Event Queue，process.nextTick分发到微任务Event Queue
                    任务进入执行栈----同步任务还是异步任务----同步的进入主线程，异步的进入Event Table并注册函数。
                    当指定的事情完成时，Event Table会将这个函数移入Event Queue。主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。
                    上述过程会不断重复，也就是常说的Event Loop(事件循环)。
                </p>
            </div>
            <jp-com-mode>
                <vue-markdown v-highlight :source="''"></vue-markdown>
            </jp-com-mode>
        </jp-com-mode>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import MarkdownMd from './event.md'
export default {
    name: 'mod-js',
    components: {
        VueMarkdown
    },
    data () {
        return {
            source: MarkdownMd
        }
    }
}
</script>

<style scoped>

</style>
