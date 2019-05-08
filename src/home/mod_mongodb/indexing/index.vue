<template>
    <div>
        <el-collapse v-model="activeName" accordion>

            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="基本的索引"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="base"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title="全文索引"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="textIndexes"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>

import VueMarkdown from 'vue-markdown';

import Base from './md/base.md';
import TextIndexes from './md/text_indexes.md';

export default {
    name: 'service-deploy',
    components: {
        VueMarkdown
    },
    data () {
        return {
            activeName: '2',
            base: Base,
            textIndexes: TextIndexes
        }
    }
}
</script>

<style scoped>

</style>
