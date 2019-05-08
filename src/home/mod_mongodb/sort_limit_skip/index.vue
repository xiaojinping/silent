<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="序言"> </jp-com-mode>
                </template>
                <jp-com-mode>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title="实例：详细介绍"> </jp-com-mode>
                </template>

                <jp-com-mode>
                    <vue-markdown v-highlight :source="sourceMd"></vue-markdown>
                </jp-com-mode>

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
