<template>
    <div>

        <jp-com-mode title="获取state的方式">
            <el-tag type="info">$store.state</el-tag>
            <el-tag type="info">...mapState</el-tag>
        </jp-com-mode>
        <jp-com-mode title="示例： 个人信息">

            <div class="example-groups">
                <div class="example-groups-item">
                    <span class="label">【姓 名】</span>  {{$store.state.AUTHOR.name}} - {{authorName}}
                    <el-tag type="info">这里采用的 $store 获取的数据</el-tag>
                </div>
                <div class="example-groups-item">
                    <span class="label">【自我介绍】</span>  {{author.description}}
                    <el-tag type="info">...mapState({author: 'AUTHOR'}})  </el-tag>
                </div>
                <div class="example-groups-item">
                    <span class="label">【自我介绍】</span>  {{authorDes}}
                    <el-tag type="info">...mapState({箭头函数}})  </el-tag>
                </div>
                <div class="example-groups-item">
                    <span class="label">【自我介绍】</span>  {{authorDescription}}
                    <el-tag type="info">...mapState({常规函数}})  </el-tag>
                </div>
                <div class="example-groups-item">
                    <span class="label">【能 力】</span>  {{AUTHOR.capacity}}
                    <el-tag type="info">...mapState([] </el-tag>
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
import { mapState } from 'vuex'
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
        authorName ()  {
            return this.$store.state.AUTHOR.name;
        },
        ...mapState({
            author: 'AUTHOR',
            authorDes: state => {
                return state.AUTHOR.description + `【箭头函数的this指向了vuex】`;
            } ,
            authorDescription (state) {
                return state.AUTHOR.description + `【只有使用常规函数才可以获取预期的this对象】`;
            }
        }),
        ...mapState(['AUTHOR'])
    },
    mounted () {

    },
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
