<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="前文回顾"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <ul>
                        <li>mongoDb 安装</li>
                        <li>mongoDb 开启与连接 mongod  mongo </li>
                        <li>show dbs 可以查看数据库列表</li>
                        <li>db.version() 查看版本号</li>
                    </ul>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title="创建数据库 use 数据库名称"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="createBaseMd"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="3">
                <template slot="title">
                    <jp-com-mode title="创建集合/表 db.集合名称.insert()"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="createCollection"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="4">
                <template slot="title">
                    <jp-com-mode title="注意：开始说废话"> </jp-com-mode>
                </template>
                <ul>
                    <li>创建数据库，创建集合，如果没有插入内容，通过 show 命令是看不到的。</li>
                    <li> 通过 use 命令创建数据库，如果存在，就直接进入，如果不存在，会先创建再进入。</li>
                    <li> 通过 db.xxx.insert() 这种方式创建集合，如果集合存在，就直接插入文件，如果不存在，先创建再插入 </li>
                    <li>通过createCollection创建集合，是不能够创建一个已经存在了的集合。</li>
                </ul>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>

<script>

import VueMarkdown from 'vue-markdown';
import CreateBaseData from './create_basedata.md';
import CreateCollection from './create_collection.md';

export default {
    name: 'service-deploy',
    components: {
        VueMarkdown
    },
    data () {
        return {
            activeName: '4',
            createBaseMd: CreateBaseData,
            createCollection: CreateCollection
        }
    }
}
</script>

<style scoped>

</style>
