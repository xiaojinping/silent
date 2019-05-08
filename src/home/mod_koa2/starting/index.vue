<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="前言：服务器？ 中间件"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    koa2是什么？他的功能是什么？
                    个人觉得写的好的博客，廖雪峰在这块讲的比较透彻。当然，最后，如果了解了koa之后，还是要去看官方文档。
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title="安装"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    npm install --save koa
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="3">
                <template slot="title">
                    <jp-com-mode title="模板"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="source"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="4">
                <template slot="title">
                    <jp-com-mode title="部署：如何让写好的koa代码在服务器上生效 "></jp-com-mode>
                </template>
                <jp-com-mode>
                     <div>
                         在部署好node的环境里，直接把代码丢到某个目录，先安装依赖，npm i  然后运行服务 node index.js
                     </div>
                </jp-com-mode>
            </el-collapse-item>
        </el-collapse>

    </div>
</template>

<script>
/*eslint-disable*/
import store from '@/vuex/store/index.js'
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './index.md'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'vuex-state',
    components: {
        VueMarkdown
    },
    store,
    data () {
        return {
            activeName:'4',
            source: MarkDownSource
        }
    },
    computed: {
    },
    mounted () {
        axios({
            url: `${window.BASE.URL}koa`,
            method: 'get'
        }).then( (response) => {
            console.log(response)
        }).catch((error) => {
            console.error(error);
        });
    },

    methods: {
    }
}
</script>

<style>

    .example-groups,
    .example-groups-item {
        margin-top: 10px;
    }
    .example-groups-item .label{
        display: inline-block;
        width: 80px;
    }
</style>
