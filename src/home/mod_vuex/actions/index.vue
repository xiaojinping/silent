<template>
    <div>
        <jp-com-mode title="注意">
            <p>
                actions 可以是一个异步的方法，他不直接改变state,而是通过 异步调用 mutation 来达到改变state的需求。这是一个约定
            </p>
            <p>actions  在定义的时候，注意他的参数，他接收一个上下文</p>
            <p>...mapActions([]) 与 ...mapMutations([]) 同时存在时，后面的覆盖前面的，原理类似 mixis</p>

        </jp-com-mode>
        <jp-com-mode title="使用actions的方式: 参考 mutation">
            <div class="example-groups">
                <el-tag type="info">方式1</el-tag>
                <span>$store.dispatch (fnName,arg)</span>
            </div>
            <div class="example-groups">
                <el-tag type="info">方式2</el-tag>
                <span>...mapActions</span>
            </div>
        </jp-com-mode>

        <jp-com-mode title="如何执行actions">
            <div class="example-groups">
                <el-button type="primary" plain @click="changeAuthorName('xjp')">改名 ...mapMutations()</el-button>
                <el-button type="primary" plain @click="commitAuthorName('xiaojp')">改名 $store.dispatch()</el-button>
            </div>
            <div class="example-groups">
                <el-button type="primary" plain @click="addAuthorCapacity(['js', 'css'])">我get了一些新的技能</el-button>
            </div>
        </jp-com-mode>

        <jp-com-mode title="示例： 个人能力展示">
            <div class="example-groups">
                <div class="example-groups-item">
                    <span class="label">【姓 名】</span>  {{AUTHOR.name}}
                </div>
                <div class="example-groups-item">
                    <span class="label">【能 力】</span>  {{AUTHOR.capacity}}
                </div>
            </div>
        </jp-com-mode>

        <jp-com-mode title="代码">
            <vue-markdown v-highlight :source="source"></vue-markdown>
        </jp-com-mode>
        <jp-com-mode title="官方文档">
            <vue-markdown v-highlight :source="sourceActionsMd"></vue-markdown>
        </jp-com-mode>
    </div>
</template>

<script>
/*eslint-disable*/
import store from '@/vuex/store/index.js'
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './index.md'
import ActionsMd from './actions.md'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    name: 'vuex-state',
    components: {
        VueMarkdown
    },
    store,
    data () {
        return {
            source: MarkDownSource,
            sourceActionsMd: ActionsMd
        }
    },
    computed: {
        ...mapState(['AUTHOR'])
    },
    mounted () {
    },
    methods: {
        commitAuthorName (str) {
            this.$store.dispatch('changeAuthorName',str);
        },
        // 对象风格的提交方式 ，不推荐使用
        commitAuthorNameObj (str) {
            this.$store.commit({
                type: 'changeAuthorNameObj',
                name: str,
                age: 30
            });
        },
        // 注意，当 mapMutations和mpaActions 同时存在时，后定义的会覆盖我们前面定义的，可以理解成 mixis,
        ...mapMutations(['changeAuthorName', 'addAuthorCapacity', 'changeAuthorNameObj']),
        ...mapActions(['changeAuthorName', 'addAuthorCapacity']),

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
