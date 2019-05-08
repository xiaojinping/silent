<template>
    <div>
        <jp-com-mode title="如何理解getters">
            getters 相当于vue里面的 computed , 最少在理解上，我们可以把他理解成vue里面的计算属性
        </jp-com-mode>

        <jp-com-mode title="设置getters的方式">
            <div class="example-groups">
                <el-tag type="info">方式1：做为属性</el-tag>  authorCapacityCount: state => state.AUTHOR.capacity.length,
                <p> 具体参考 $store.state.key</p>
            </div>
            <div class="example-groups">
                <el-tag type="info">方式2：做为方法</el-tag> hasAuthorCapacityVue: state => () => {}
                <span>...mapGetters</span>
                <p>具体看代码</p>
            </div>
        </jp-com-mode>

        <jp-com-mode title="获取getters的方式">

            根据getters的设置方式不一样，getters的获取方式也不一样，getters的设置可以分为做为属性的值，这种方式与获取state一样，
            另外一种方式，当getters是做为一个方法存在时，获取方式就相当于去获取一个方法的返回值一样。大同小异。
            注意，当使用辅助函数时，他们都是写是在 coumputed 计算属性里去获取。

            <div class="example-groups">
                <el-tag type="info">方式1</el-tag>
                <span>$store.getters.key</span>
                或者
                <span>$store.getters.key()</span>
                <span> 具体参考 $store.state.key</span>
            </div>
            <div class="example-groups">
                <el-tag type="info">方式2</el-tag>
                <span>...mapGetters</span>
                <span>具体参考 mapState</span>
            </div>
        </jp-com-mode>

        <jp-com-mode title="演示： ">
            <p> state的值发生改变时，计算属性同样会实时计算 </p>
            <div class="example-groups">
                <el-button type="primary" plain @click="addAuthorCapacity(['js', 'css'])">增加技能</el-button>
            </div>
        </jp-com-mode>

        <jp-com-mode title="示例： 个人信息 ">
            <div class="example-groups">
                <div class="example-groups-item">
                    <span class="label">【技能数量】</span>  {{$store.getters.authorCapacityCount}}
                </div>
                <div class="example-groups-item">
                    <span class="label">【会Vue】</span> {{hasAuthorCapacityVue('vue')}}
                </div>
                <div class="example-groups-item">
                    <span class="label">【会js】</span> {{hasAuthorCapacityVue('js')}}
                </div>
                <div class="example-groups-item">
                    <span class="label">【能 力】</span>  {{AUTHOR.capacity}}
                </div>
            </div>
        </jp-com-mode>

        <jp-com-mode title="代码">
            <vue-markdown v-highlight :source="source"></vue-markdown>
        </jp-com-mode>
    </div>
</template>

<script>
/*eslint-disable*/
import store from '@/vuex/store/index.js'
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './index.md'
import { mapState, mapMutations, mapGetters } from 'vuex'
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
        ...mapState(['AUTHOR']),
        ...mapGetters(['authorCapacityCount', 'hasAuthorCapacityVue'])
    },
    mounted () {
    },
    methods: {
        commitAuthorName (str) {
            this.$store.commit('changeAuthorName',str);
        },
        ...mapMutations(['changeAuthorName', 'addAuthorCapacity'])
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
