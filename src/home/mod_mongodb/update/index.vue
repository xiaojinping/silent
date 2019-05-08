<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="updata()"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <div>在前文中，我们已经使用过db.collection.update(); 他的作用就是修改集合中的文档</div>
                    <div>在前文的案例当中，我们有接触到 update 的 $set 修改器, 除此之外，还没有别的修改器？</div>
                    <jp-com-mode title="update 基本语法 ：">
                        db.collection.update(query,  update,  {upsert,  multi, writeConcern})
                    </jp-com-mode>
                    <jp-com-mode title="update 修改器 ：">
                        <ul>
                            <li><el-tag>$set</el-tag> 修改一个指定的键值(key) </li>
                            <li><el-tag type="success">$unset</el-tag> 删除一个键值对</li>
                            <li><el-tag>$inc</el-tag> 对数字进行计算，例如，所有作者的年龄 +1</li>
                            <li><el-tag>$push, $pop, $ne, $addToSet, $each</el-tag> 数组的修改。 </li>
                        </ul>
                    </jp-com-mode>
                    <jp-com-mode title="update有哪些参数 ：">
                        <div>update 修改器其实是写在 update 第二个参数里的。</div>
                        <ul>
                            <li><el-tag>query</el-tag> 第一个参数，[object] update的查询条件，类似sql update查询内where后面的。 </li>
                            <li><el-tag>update</el-tag> 第二个参数，需要更新的对象</li>
                            <li><el-tag>{upsert}</el-tag>可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。</li>
                            <li><el-tag>{multi}</el-tag> 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新</li>
                        </ul>
                    </jp-com-mode>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title="实例1： 详细介绍"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="sourceMd"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="3">
                <template slot="title">
                    <jp-com-mode title="实例2： 数组的操作"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="updateMd"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>

<script>

import VueMarkdown from 'vue-markdown';
import SourceMd from './index.md';
import UpdateMd from './update_arr.md';

export default {
    name: 'service-deploy',
    components: {
        VueMarkdown
    },
    data () {
        return {
            activeName: '1',
            sourceMd: SourceMd,
            updateMd: UpdateMd
        }
    }
}
</script>

<style scoped>

</style>
