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
        this.promiseOne()
            .then((...response) => {
                console.log(response);
            })
            .catch()
            .finally((...values)=>{
                console.log('成功了，然后我执行', values);
            });
        this.promiseTwo()
            .then()
            .catch((...response) => {
                console.log(response);
            })
            .finally((...values)=>{
                console.log('finally执行', values);
            });
    },
    methods: {
        promiseOne (time = 1000) {
            return new Promise(function (resolve) {
                setTimeout(() => {
                    resolve('成功之后');
                }, time);
            });
        },
        promiseTwo (time = 3000) {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    reject('拒绝之后');
                }, time);
            });
        }
    }

}
</script>

<style scoped>

</style>

