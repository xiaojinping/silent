<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="安装方式"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="installMd"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title="启动服务"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="startSerMd"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="3">
                <template slot="title">
                    <jp-com-mode title="常见错误"> </jp-com-mode>
                </template>
                <ul>
                    <li>
                         node 版本太低
                    </li>
                    <li>
                        没有加入环境变量，需要软连接。
                    </li>
                </ul>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>

<script>

import VueMarkdown from 'vue-markdown';
import InstallMd from './install.md';
import StartSerMd from './startSer.md';

export default {
    name: 'service-deploy',
    components: {
        VueMarkdown
    },
    data () {
        return {
            activeName: '3',
            installMd: InstallMd,
            startSerMd: StartSerMd
        }
    }
}
</script>

<style scoped>

</style>
