<template>
    <div>
        <jp-com-mode title="使用mutation的方式">
            <div class="example-groups">
                <el-tag type="info">方式1</el-tag>
                <span>$store.commit(fnName,arg)</span>
                <p>使用$store.commit()改变state的时候，第一个参数必须是对应mutation的名称（字符串），第二个函数才是该需要接收的参数。</p>
            </div>
            <div class="example-groups">
                <el-tag type="info">方式2</el-tag>
                <span>...mapMutations</span>
                <p>使用 mapMutations 的时候，1：引入 mapMutations …… 此处省略，自行参考mapState </p>
            </div>
        </jp-com-mode>

        <jp-com-mode title="如何改变state">
            <div class="example-groups">
                <el-button type="primary" plain @click="changeAuthorName('xjp - mapMutations')">改名 ...mapMutations()</el-button>
                <el-button type="primary" plain @click="commitAuthorName('xjp - commit-string')">改名 $store.commit('','')</el-button>
                <el-button type="primary" plain @click="commitAuthorNameObj('xjp - commit-object')">commit的对象提交风格</el-button>
                <el-button type="primary" plain @click="changeAuthorNameObj({type:'changeAuthorNameObj',name:'小小小'})">mapMutation的对象提交风格，修改名称</el-button>
            </div>
            <div class="example-groups">
                <el-button type="primary" plain @click="addAuthorCapacity(['js', 'css'])">我get了一些新的技能</el-button>
                <el-button type="primary" plain @click="addAuthorCapacity('vuex-mutations')">我学会了 vuex-mutations</el-button>

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
    </div>
</template>

<script>
/*eslint-disable*/
import store from '@/vuex/store/index.js'
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './index.md'
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
        ...mapState(['AUTHOR'])
    },
    mounted () {
    },
    methods: {

        commitAuthorName (str) {
            this.$store.commit('changeAuthorName',str);
        },
        // 对象风格的提交方式 ，不推荐使用
        commitAuthorNameObj (str) {
            this.$store.commit({
                type: 'changeAuthorNameObj',
                name: str,
                age: 30
            });
        },
        ...mapMutations(['changeAuthorName', 'addAuthorCapacity', 'changeAuthorNameObj'])
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
