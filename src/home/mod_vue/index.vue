<template>
    <div>
        <jp-com-mode title="computed 计算属性 bug ">
            <div class="example-groups">
                <div class="example-groups-item">
                    {{message}}
                </div>
                <div class="example-groups-item">
                    <el-input type="text" v-model="message"></el-input>
                </div>
            </div>

            <div class="example-groups">
                <div class="example-groups-item">
                    {{msg}}
                </div>
                <div class="example-groups-item">
                    <el-input type="text" v-model="msg"></el-input>
                </div>
            </div>
        </jp-com-mode>
    </div>
</template>

<script>
export default {
    name: 'mod_vue',
    data () {
        return {
            a: 1,
            msg1: '我是大箱子',
            message: '我是message消息提示，我会双向绑定数据'
        }
    },
    computed: {
        msg: {
            get: function () {
                return this.msg1;
            },
            set: function (v) {
                this.msg1 = v;
            }

        }
    }

}
</script>

<style scoped>
    .example-groups,
    .example-groups-item {
        margin-top: 10px;
    }
    .example-groups-item .label{
        display: inline-block;
        width: 80px;
    }

</style>
