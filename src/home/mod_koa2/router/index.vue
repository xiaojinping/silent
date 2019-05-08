<template>
    <div>
        <jp-com-mode title="前言">
            <p>在一个项目当中，可以根据功能，页面不的同，有多个接口，这个是怎么实现的。</p>
            <div>
                <p>第一种方式 ，通过不同的url来实现</p>
                <p>第二种方式，通过代理服务来实现</p>
            </div>
        </jp-com-mode>
        <jp-com-mode title="安装">
            npm install --save koa-router
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
        this.fetchDataPage('vuex/state', 'post');
        this.fetchDataPage('vue/watch', 'post');
        this.fetchDataPage('koa');
    },
    methods: {
        fetchDataPage (url, type = 'get') {
            axios({
                url: `${window.BASE.URL}${url}`,
                method: type
            }).then( (response) => {
                console.log(response)
            }).catch((error) => {
                console.error(error);
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
