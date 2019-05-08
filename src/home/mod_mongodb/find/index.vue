<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
                <template slot="title">
                    <jp-com-mode title="前篇：查找之前，先建立集合，插入文档"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <div>下载</div>
                    <vue-markdown v-highlight :source="insertParamsMd"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template slot="title">
                    <jp-com-mode title="基本语法"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="baseGrammar"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="3">
                <template slot="title">
                    <jp-com-mode title="条件操作符（比较运算）"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <div>下载</div>
                    <vue-markdown v-highlight :source="baseFindMd"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="4">
                <template slot="title">
                    <jp-com-mode title="逻辑运算符 and all or in"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="logicFindMd"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="5">
                <template slot="title">
                    <jp-com-mode title="数组查询 all or slice size"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="arrFindMd"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>

            <el-collapse-item name="6">
                <template slot="title">
                    <jp-com-mode title=" find如何在 js 中使用 hasNext() 与 forEach"> </jp-com-mode>
                </template>
                <jp-com-mode>
                    <vue-markdown v-highlight :source="otherFindMd"></vue-markdown>
                </jp-com-mode>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>

import VueMarkdown from 'vue-markdown';

import BaseGrammar from './md/base_grammar.md';
import InsertParmasMd from './md/insert_params.md';
import BaseFindMd from './md/operators_find.md';
import LogicFindMd from './md/logic_find.md';
import ArrFindMd from './md/arr_find.md';
import OtherFindMd from './md/other.md';
export default {
    name: 'service-deploy',
    components: {
        VueMarkdown
    },
    data () {
        return {
            activeName: '',
            baseGrammar: BaseGrammar,
            insertParamsMd: InsertParmasMd,
            baseFindMd: BaseFindMd,
            logicFindMd: LogicFindMd,
            arrFindMd: ArrFindMd,
            otherFindMd: OtherFindMd
        }
    }
}
</script>

<style scoped>

</style>
