<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="前文回顾"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <div>在之前的内容里，我们学习了创建库，查看库，进入库 ，创建集合，插入文档，替换文档，更新文档</div>
                    <ul>
                        <li>
                            <el-tag type="success">show dbs</el-tag>
                        </li>
                        <li>
                            <el-tag type="success">show collections</el-tag>
                        </li>
                        <li>
                            <el-tag >db</el-tag>
                        </li>
                        <li>
                            <el-tag >use DB_NAME</el-tag>
                        </li>
                        <li>
                            <el-tag type="success">db.COLLECTION_NAME.insert()</el-tag></li>
                        <li>
                            <el-tag type="success">db.COLLECTION_NAME.insertMany()</el-tag>
                        </li>
                        <li>
                            <el-tag type="success">db.COLLECTION_NAME.save()</el-tag>
                        </li>
                        <li>
                            <el-tag type="success">db.COLLECTION_NAME.update()</el-tag>
                        </li>
                        <li>
                            <el-tag >db.COLLECTION_NAME.find()</el-tag>
                        </li>
                    </ul>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title="基本语法"> </jp-com-mode>
                </template>

                <jp-com-mode>
                    <jp-com-mode title="删除库： db.dropDatabase()">
                        <div>内容太过简单，不做介绍，这个命令一般也很少用</div>
                    </jp-com-mode>
                    <jp-com-mode title="删除集合： db.COLECTION_NAME.drop()">
                        <div>内容太过简单，不做介绍</div>
                        <div>例如：db.silent.drop()  // 删除了一个叫做 silent 的集合</div>
                    </jp-com-mode>
                    <jp-com-mode title="删除文档： db.COLECTION_NAME.remove()">
                        <div>删除所有文档：db.COLECTION_NAME.remove({}), 注意，参数是一个空的对象</div>
                        <div>删除指定条件的文档： db.COLECTION_NAME.remove({"title": "xjp"})</div>
                        <jp-com-mode>
                            <vue-markdown v-highlight :source="sourceMd"></vue-markdown>
                        </jp-com-mode>
                    </jp-com-mode>
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
