<template>
    <div>
        <jp-com-mode title="注意">
            <p>不管是否区分模块。state, actions, mutations, getters,有且只有一个</p>
            <p>分模块后，state可分模块访问，例如： $store.state.模块名.变量名</p>
            <p>不管是在哪个模块里， actions, mutations 里面的方法都是唯一的， </p>
            <p>简单的说，不同的模块定义的state,getters 里面的名称，可以是一样的。通过模块名识别</p>
            <p>但是，多个模块里面的方法不能重名，需要保证唯一性</p>

        </jp-com-mode>
        <jp-com-mode title="使用actions的方式: 参考 mutation">
        </jp-com-mode>

        <jp-com-mode title="如何执行actions">

        </jp-com-mode>

        <jp-com-mode title="示例：修改个人描述 ">
            <div>
                每次提交后，如果修改失败，重新获取个人信息。 为空，则失败，可以试下
            </div>
            <el-form :label-position="'left'"
                     :model="userInfo"
                     label-width="100px"
                     class="demo-ruleForm">
                <el-form-item label="自我介绍">
                    <el-input v-model="userInfo.des" placeholder="这家伙很懒，什么也没留下"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitUserDes">提交</el-button>
                    <el-button @click="setObjDes">重置</el-button>
                </el-form-item>
            </el-form>
        </jp-com-mode>

        <jp-com-mode title="官方文档">
            <vue-markdown v-highlight :source="source"></vue-markdown>
        </jp-com-mode>
    </div>
</template>

<script>
/*eslint-disable*/
import store from '@/vuex/store/index.js'
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './modules.md'
import {CHANGE_USER_NAME, CHANGE_USER_DES} from '@/vuex/store/const.js'

import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    name: 'vuex-state',
    components: {
        VueMarkdown
    },
    store,
    data () {
        return {
            userInfo:{des: ''},
            des: '',
            source: MarkDownSource,
        }
    },
    computed: {
        msg () {
           return '改变值之后，为什么没有变化';
        },
        obj () {
            return   {
                des: 'hello'
            };
        },
        ...mapState({
            /**
             * USER 采用的全大写的，所以不允许修改，这里需要绑定到input, 所以必须clone,否则会改变他的值.
             * 另外，这种方式会有问题，他的v-mode并没有双向绑定。 computed属性默认只有get,没有set
             */
            // userInfo: state => {
            //     debugger;
            //    return  window.lodash.cloneDeep(state.USER.userInfo) || {} ;
            // }
        })
    },

    mounted () {
        this.getUserInfo();
    },
    methods: {
        setObjDes () {
            let promise = new Promise(function(resolve, reject) {
                resolve();
            });
            promise.finally(() => {
                debugger;
                this.$set(this.obj, 'des', '你好');
            })

        },
        submitUserName () {
            // 发起一个请求，只有后台设置成功之后，这里才执行操作。
        },
        getUserInfo () {
            let userInfo = window.lodash.cloneDeep(this.$store.state.USER.userInfo);
            this.userInfo = {
                ...userInfo
            };
            // this.$set(this.userInfo, 'des', userInfo.des);
        },
        submitUserDes () {
            this[CHANGE_USER_DES](this.userInfo.des).then((response) => {
                this.$message({
                    type: 'success',
                    message: response || '操作成功'
                });
            }).catch((response) => {
                this.$message({
                    type: 'error',
                    message: response || '操作失败'
                });
                this.getUserInfo();
            }).finally(() => {
              //
            });
        },
        ...mapActions([CHANGE_USER_NAME, CHANGE_USER_DES])
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
