<template>
    <div>
        <vue-markdown v-highlight :source="source"></vue-markdown>
        <div class="example-groups">
            <router-link to="/named_views/skills" >
                <el-button type="primary">
                   点击察看实例效果
                </el-button>
            </router-link>

        </div>
        <jp-com-mode>
            <router-view class="view one"></router-view>
            <router-view name="namedRouter"></router-view>
            <router-view name="vueRouter"></router-view>
        </jp-com-mode>
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
