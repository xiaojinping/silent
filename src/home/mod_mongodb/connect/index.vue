<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="前文回顾"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <div>在前面的内容中，我们能够做到对 MongoDB 的增删改查，但是都是通过终端命令的方式来实现</div>
                    <div>做个假设，用户在页面上做了操作，比如说修改了某个字段的值，前端把用户的这些修改提交给后台，后台需要写入数据库，这个时候，我们是不可能通过手动的方式在终端里敲代码的</div>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title=" js 连接mongodb操作数据库"> </jp-com-mode>
                </template>
                <vue-markdown v-highlight :source="sourceMd"></vue-markdown>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>

<script>

import VueMarkdown from 'vue-markdown';
import SourceMd from './index.md';

export default {
    name: 'service-deploy',
    components: {
        VueMarkdown
    },
    data () {
        return {
            activeName: '2',
            sourceMd: SourceMd
        }
    }
}
</script>

<style scoped>

</style>
