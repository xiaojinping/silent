<template>
    <div class="jp-plan">
        <div class="jp-plan__header">
            <slot name="title">
                <h3 class="plan-title">{{title}}</h3>
            </slot>
        </div>
        <div class="jp-plan__body">
            <!-- 这里面应该用一个表格可能会更好适，这里暂时手写。 -->

            <div>
                <span v-for="item in res" :key="item">item.label</span>
            </div>
            <div>
                <span v-for="item in res" :key="item">item.value</span>
            </div>

        </div>
        <div class="jp-plan__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
/*
 * @file: 项目计划，这个文件不用el-ui，主要目的是为了和el-ui做比较。
 */
export default {
    name: '',
    props: {
        title: {
            type: String,
            defalut: ''
        },
        res: {
            type: Array,
            defalut: []
        }
    }
}
</script>

<style scoped>

</style>
