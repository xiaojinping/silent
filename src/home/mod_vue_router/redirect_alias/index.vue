<template>
    <div>
        <p>重定向和别名 ,都指向 '/vue_router'，仔细观察'/vue_router'页面 内容 和 url 的变化，</p>
        <p>1：别名：用户可以直接在url上面输入别名链接到'/vue_router',</p>
        <p>2：redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。这个真实的路径</p>

        <div>
            <router-link to="/redirect">
                <el-button type="primary">重定向到 /vue_router</el-button>
            </router-link>
            <router-link to="/vue_router_alias">
                <el-button type="primary">别名 /vue_router_alias </el-button>
            </router-link>
        </div>

        <vue-markdown v-highlight :source="source"></vue-markdown>

    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './index.md'
export default {
    name: 'getting-started',
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
</style>
