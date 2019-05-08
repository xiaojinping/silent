<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="安装方式"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="sourceMd"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title="常见错误"> </jp-com-mode>
                </template>
                <ul>
                    <li>
                         安装的根目录下没有data/db目录, 所以，在安装完成后，需要手动在根目录建立这个目录。
                    </li>
                    <li>
                        安装目录下没有lib的目录，我之前有更改安装目录，从c盘改到 D 盘，安装完后，发现目录结构中没有 lib目录
                    </li>
                </ul>
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
