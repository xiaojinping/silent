<template>
    <div>
        <jp-com-mode title="设置cookie">
            <p>登陆的时候, 设置cookie, 下一次进入的时候，可以读取cookie,这样就不用每次都输入密码</p>
            <p>但是，在使用cookie的时候，需要注意跨域问题。</p>
            <p>前台在axios请求的时候，需要设置 withCredentials ：true; </p>
            <p>后台相应的也需要设置。 ctx.set('Access-Control-Allow-Credentials', true);</p>
            <div>
                <span>cookie设置的可选参数</span>
                <ul class="example-groups">
                    <li v-for="item in cookiesOption" :key="item.name" class="example-groups-item">
                        <span v-text="item.name" class="label"></span>：
                        <span v-text="item.des"></span>
                    </li>
                </ul>
            </div>
            <el-button type="primary" @click="fetchDataPage('user/setcookies', 'post')">设置cookie</el-button>

        </jp-com-mode>
        <jp-com-mode title="获取cookie">
            <el-button type="primary" @click="fetchDataPage('login/getcookies', 'post')">获取cookie</el-button>
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
            cookiesOption: [{
                name: 'domain',
                des: '写入cookie所在的域名'
            }, {
                name: 'path',
                des: '写cookie的路径，写入之后，只有这个路径能访问，例如：/login, 则前端请求的时候，只有这个url可以读取写入的cookie'
            }, {
                name: 'maxAge',
                des: 'cookie有效时长，比如说一天内免密码登陆。'
            }, {
                name: 'expires',
                des: '失效时间，他和maxAge,虽然都是失效'
            }, {
                name: 'httpOnly',
                des: '是否只用于http请求'
            }, {
                name: 'overwrite',
                des: '是否允许重写'
            }],
            source: MarkDownSource
        }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
        fetchDataPage (url, type = 'get') {
            axios({
                url: `${window.BASE.URL}${url}`,
                method: type,
                withCredentials: true // 允许跨域发生cookie
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
        color: #409eff;
    }
</style>
