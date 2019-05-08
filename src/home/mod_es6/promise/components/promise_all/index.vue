<template>
    <div>
        <jp-com-mode :title="'Promisi.prototype.all'">
            <vue-markdown v-highlight :source="md"></vue-markdown>
        </jp-com-mode>
    </div>
</template>

<script>
/*eslint-disable*/
import VueMarkdown from 'vue-markdown' //直接作为一个组件引入
import Reamde  from './index.md' //直接作为一个组件引入
export default {
    name: 'promise-all',
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
        // 第一种情况，有一个是拒绝
        Promise.all([this.promiseOne(), this.promiseTwo(), this.promiseThree()]).then((values) => {
            console.log(...values); // 这里不会进来，因为 promiseThree 拒绝了。
        }).catch((values) => {
            console.log(values); // 这里的values应该是一个字符串。
        });

        // 第二种情况 ，全部为resolve
        Promise.all([this.promiseOne(), this.promiseTwo()]).then((values) => {
            console.log(values); // 这里同时请求了两个promise,同时resolve之后，得到的是一个数组。这个数组的值就是所有的promise返回结果的集合
        }).catch((values) => {
            console.log(values);
        });
    },
    methods: {
        promiseOne (time = 1000) {
            return new Promise(function (resolve) {
                setTimeout(() => {
                    resolve('promiseOne');
                }, time);
            });
        },
        promiseTwo (time = 2000) {
            return new Promise(function (resolve) {
                setTimeout(() => {
                    resolve('promiseTwo');
                }, time);
            });
        },
        promiseThree (time = 3000) {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    reject('promiseThree');
                }, time);
            });
        }
    }

}
</script>

<style scoped>

</style>

