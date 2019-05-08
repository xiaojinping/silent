<template>
    <div>
        <jp-com-mode title="koa2 如何获取get请求参数">
            <div class="example-groups tags">
                <el-tag type="info">request.query</el-tag>
                <el-tag type="info">request.querystring</el-tag>
                <el-tag type="info">ctx.query</el-tag>
                <el-tag type="info">ctx.querystring</el-tag>
            </div>

            <div class="example-groups">
                <el-button type="primary" @click="featchData">点击此按钮，发起一个ajax请求</el-button>
                自行去 network 里观察返回的数据，看下数据格式是什么。
            </div>

            <div class="example-groups">
                <p class="example-groups-item">通过 request.querystring 返回的数据是一个字符串</p>
                <p class="example-groups-item">通过 request.query 返回的数据是一个json</p>
            </div>
        </jp-com-mode>

        <jp-com-mode title="koa2 如何获取post请求参数">
            <test-from></test-from>
        </jp-com-mode>

        <jp-com-mode title="代码详解">
            <vue-markdown v-highlight :source="source"></vue-markdown>
        </jp-com-mode>

    </div>
</template>

<script>
/*eslint-disable*/
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './index.md'
import TestFrom from './from.vue'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'vuex-state',
    components: {
        VueMarkdown,
        TestFrom
    },
    data () {
        return {
            info: [],
            loading: false,
            source: MarkDownSource
        }
    },
    computed: {
    },
    mounted () {

    },
    methods: {
        async featchData () {
            this.loading = true;
            await axios({
                url: `${window.BASE.URL}koa`,
                method: 'get',
                params: {
                    author: 'xjp',
                    date: new Date(),
                    age: 0,
                    job: 'hihi'
                }
            }).then((response) => {
                this.info = response.data;
                console.log(this.info);
            }).catch((error) => {
                console.error(error);
            }).finally(() => {
                this.loading = false;
            });
        }
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
