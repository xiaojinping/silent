<template>
    <div>
        <vue-markdown v-highlight :source="source"></vue-markdown>
        <router-link to="/route_matching/params/1">
            <el-button type="primary"> 去验证 </el-button>
        </router-link>
        <jp-com-mode title="问题">
            <li>
                beforeEach 和 beforeRouteEnter 谁先触发 答案：beforeEach先执行
            </li>
            <li>
                <p>多个页面同时存在 beforeRouteEnter ， beforeRouteLeave,  执行顺序是怎么样的。</p>
                <p>假如，从 A 页面 离开，进入B，是先触发 B 页面的 beforeRouteEnter，还是先触发 A 页面的 beforeRouteLeave</p>
                <p>我为什么 有此一问，是因为，我之前在写 vue的时候，犯过一个错误，离开的时候，B 页面的 created 先执行，后执行 A 页面的 destroyed </p>
                <p> 那么，在路由中，他又是怎么的执行顺序。</p>
                <p>我特意试了下，答案是：先离开 A 页面，再进入 B 页面，（正常逻辑） </p>
            </li>
        </jp-com-mode>
    </div>
</template>

<script>
/*eslint-disable*/
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './index.md'
export default {
    name: 'getting-started',
    components: {
        VueMarkdown
    },
    beforeRouteEnter (to, from, next) {
        console.log(this, 'beforeRouteEnter');
        next();
    },
    beforeRouteUpdate (to, from, next) {
        console.log(this, 'beforeRouteUpdate');
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log(this, 'beforeRouteLeave');
        next();
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
