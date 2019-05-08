<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <div>
                <jp-com-mode title="insert()、save()、update()">
                    <div>除了  insert() 方法之外，save()、update() 方法也可以向集合写入文档 </div>
                    <ul>
                        <li>insert() 方法可以向集合插入文档，语法格式：db.COLLECTION_NAME.save(document)</li>
                        <li>save() 方法通过传入的文档来替换已有文档。语法格式：db.COLLECTION_NAME.save(document)</li>
                        <li>update() 方法用于更新已存在的文档。语法格式： db.COLLECTION_NAME.update(document, {$set: document})</li>
                    </ul>
                </jp-com-mode>
            </div>
            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="基本语法"></jp-com-mode>
                </template>
                <jp-com-mode>
                    <ul>
                        <li>db.COLLECTION_NAME.insert(document)</li>
                        <li>db.COLLECTION_NAME.save(document)</li>
                        <li>db.COLLECTION_NAME.update(document,{$set:{document}})</li>
                    </ul>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title="insert() 与 save的不同"></jp-com-mode>
                </template>
                <div>insert 与 save 都是向集合写数据</div>
                <div>如果不指定 _id 字段 save() 方法类似于 insert() 方法。如果指定 _id 字段，则会更新该 _id 的数据。</div>
                <div>insert方法是向集合中插入文档，指定id，如果集合中存在该id，则插入失败。</div>
                <div>save方法可以插入一条新的数据（文档），如果指定id，则是表示替换这个id的数据。</div>
            </el-collapse-item>

            <el-collapse-item name="3">
                <template slot="title">
                    <jp-com-mode title="save() 与 update() 的不同"></jp-com-mode>
                </template>
                <ul>
                    <li>save 与 update 都是向集合写数据</li>
                    <li>save 方法是向集合中插入或者替换一条数据,他的替换只能是整个文档的替换，而不能对某一文档的单一值进行替换 </li>
                    <li>update 方法从语法上有别于 save(), 他能在集合中找到匹配的值，然后写入新的数据，数据中如果有相同的字段，则会进行替换</li>
                </ul>

            </el-collapse-item>

            <el-collapse-item name="4">
                <template slot="title">
                    <jp-com-mode title="批量插入与循环插入"> </jp-com-mode>
                </template>
                <jp-com-mode title="">
                    <div>批量插入，是指多个文档，一次性插入到集合里。我们可以通过插入一个数组的方式来实现。例如：db.collection.insert(arr)</div>
                    <div>插入多条数据，也可以通过 for 循环的方式来插入多条数据，但是这种方式性能很差，不建议采纳</div>
                    <ul>

                        <li>
                            <el-tag type="success">db.collection.insert(documents)</el-tag>
                        </li>
                        <li>
                            <el-tag>db.collection.insertMany(documents)</el-tag>
                        </li>
                        <li>
                            <el-tag type="success">db.collection.batchInsert(documents)</el-tag>
                        </li>
                    </ul>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="5">
                <template slot="title">
                    <jp-com-mode title="实例：详细介绍"> </jp-com-mode>
                </template>
                <jp-com-mode title="">
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
            activeName: '4',
            sourceMd: SourceMd
        }
    }
}
</script>

<style scoped>

</style>
