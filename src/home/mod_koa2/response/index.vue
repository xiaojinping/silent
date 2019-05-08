<template>
    <div>
        <jp-com-mode title="前言">
            koa2是什么？他的功能是什么？
            个人觉得写的好的博客，廖雪峰在这块讲的比较透彻。当然，最后，如果了解了koa之后，还是要去看官方文档。
        </jp-com-mode>
        <jp-com-mode title="安装">
            npm install --save koa
        </jp-com-mode>
        <jp-com-mode title="介绍">
            <vue-markdown v-highlight :source="source"></vue-markdown>
        </jp-com-mode>

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
            source: MarkDownSource
        }
    },
    computed: {
    },
    mounted () {
        axios({
            url: window.BASE.URL,
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
