<template>
    <div>
        <jp-com-mode title="路由模式">
            <div >
                <p>第一种模式，hash 模式，常用于一些功能型（产品型）项目，例如：用户管理系统，安全云……,他的特点就是url后面会有个 #/ </p>
                <p>例如：http://localhost:8080/#/router_other</p>
            </div>
            <div>
                <p>第二种模式：history URL将显示为“正常”，例如 http://localhost:8080/router_other,作用这种模式，需要正确的配置服务器</p>
            </div>
            <jp-output-code>
                const router = new VueRouter({
                    mode: 'history',
                    routes: [...]
                })
            </jp-output-code>
        </jp-com-mode>

        <jp-com-mode title="路由的过渡动画，transtion">
            用法与vue的transtion是一样的，都是通过class来设置css动画。暂时略过，有时间来补充这块的东西。
            <vue-markdown v-highlight :source="transtionSource"></vue-markdown>
        </jp-com-mode>

        <jp-com-mode title="404页面的处理">
            <p> 应用场景，有时我们希望url错误时，转到一个404页面，可以这样定义：path: '*'</p>
            <jp-output-code>
                const router = new VueRouter({
                    mode: 'history',
                    routes: [{
                        path: '*',
                        name: 'error', // 用一个 * 号来表示余下的所有路径。
                        component (resolve) {
                            require.ensure([], (require) => resolve(require('../mod_error/index.vue')), 'error');
                        }
                    }]
                })
            </jp-output-code>
            <p> 这个项目当中不是这样处理的，我们是直接回到index页面。</p>
        </jp-com-mode>
        <jp-com-mode title="滚动行为">

            <p>滚动行为</p>
            <p>突然没兴趣写了，看官网吧。</p>
            使用客户端路由时，我们可能希望在导航到新路由时滚动到顶部，或者保留历史条目的滚动位置，就像实际页面重新加载一样。vue-router允许您实现这些甚至更好，允许您完全自定义路线导航中的滚动行为。
        </jp-com-mode>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import TranstionSourceMd from './transtionSource.md'
export default {
    name: 'getting-started',
    components: {
        VueMarkdown
    },
    data () {
        return {
            transtionSource: TranstionSourceMd

        }
    }

}
</script>

<style>
</style>
