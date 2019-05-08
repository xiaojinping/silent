<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="前文回顾"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <div>在前文中，我们操作了集合的删除，修改，插入，这些操作，我们是以 db.collection.的方式直接操作数据库的 </div>
                    <div>在实际开发中，这样的操作方式，不能体现操作后的结果，所以，为了查看操作后的结果，我们在前文的示例中经常去 find() </div>
                    <div>那么，有没有一种方式，在我们操作之后，能够返回一个结果。</div>
                    <div>findAndModify 可以在执行之后返回一些必要的参数，注意，他的remove和update参数不能共存。 如果是remove，则是一个布尔值 </div>
                    <div>db.runCommand( ): 对当前数据库运行命令 </div>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title="实例："> </jp-com-mode>
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
