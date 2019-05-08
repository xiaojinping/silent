<template>
    <div>

        <vue-markdown v-highlight :source="source"></vue-markdown>
        <div class="example-groups">
            <router-link :to="{name: 'nested_routes', query: { author: 'xjp'}}" >
                <el-button type="primary">
                  通过router-link标签访问命名路由的方式
                </el-button>
            </router-link>
        </div>
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
    .example-groups {
        margin-top: 10px;
    }
</style>
