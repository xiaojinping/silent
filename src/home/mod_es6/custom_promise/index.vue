<template>
    <div>
        <jp-com-mode :title="'Promisi.prototype.finally'">
            <vue-markdown v-highlight :source="md"></vue-markdown>
        </jp-com-mode>
    </div>
</template>

<script>
/*eslint-disable*/
import VueMarkdown from 'vue-markdown' //直接作为一个组件引入
import Reamde  from './index.md' //直接作为一个组件引入
import MyPromise from './MyPromise.js'
export default {
    name: 'promise-finally',
    components: {
        VueMarkdown
    },
    data () {
        return {
            html:'',
            md: Reamde
        };
    },
    mounted () {
        let promise = new MyPromise((resolve, reject) => {
            console.log("你好")
            setTimeout(() => {
                reject('你好');
            },2000);

        });
        promise.catch((res) => {
            console.log(res,333)
        });

    },
    methods: {


    }

}
</script>

<style scoped>

</style>

