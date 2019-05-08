<template>
    <div>
        <jp-com-mode title="一句话总结vuex">
            <p>Vuex 就是 页面与页面 通信的一种方式 </p>
            <div>
                <p>假设一个页面模块内有5个【单独】成存的子页面。现在，其中一个模块有一个设置功能，用户开启了某项服务/功能 (bypass)后, 会影响到当前模块内的所有的其他操作。此时，不管用户在当前模块哪个页面，我需要在导航栏下面有一个消息提示。</p>
                <jp-com-mode title="需求解析">
                    <ul>
                        <li>bypass功能是否开启</li>
                        <li>页面焦点是否是当前模块（不管是在当前模块的哪个页面都需要有这个消息提示）</li>
                    </ul>
                </jp-com-mode>
            </div>
            <div>
                再比如，购物商城，用户登录之后，所有的页面都应该可以获取到该用户的信息。
            </div>
        </jp-com-mode>
        <jp-com-mode title="内容简介">
            <ul>
                <li>state 访问状态</li>
                <li>mutations 修改状态</li>
                <li>gettesy 计算过滤</li>
                <li>actions 异步修改状态</li>
                <li>module 模块分组</li>
            </ul>
        </jp-com-mode>
        <jp-com-mode title="以下内容引用的官方文档">
            <vue-markdown v-highlight :source="source"></vue-markdown>
        </jp-com-mode>

    </div>
</template>

<script>
/*eslint-disable*/
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './README.md'
export default {
    name: 'reuter-sourse-code',
    components: {
        VueMarkdown
    },
    data () {
        return {
            source: MarkDownSource
        }
    }
}
</script>

<style>
    .example-groups {
        margin-top: 10px;
    }
</style>
