<template>
    <div>
        <jp-com-mode :title="'async/await'">
            <vue-markdown v-highlight :source="md"></vue-markdown>
        </jp-com-mode>
    </div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios'
import VueMarkdown from 'vue-markdown' //直接作为一个组件引入
import Reamde  from './index.md' //直接作为一个组件引入
export default {
    name: 'promise-all',
    components: {
        VueMarkdown
    },
    data () {
        return {
            md: Reamde,
            switchStatus: {}
        };
    },
    mounted () {
        // axios.get('/switchStatus.json');
        this.fetchData();

    },
    methods: {
        /**
         * 页面加载时，请求数据,
         * 1：首先请求开关状态（是否授权），根据开关状态请求对应信息，只有用户同意或者开启的情况下，才会显示出来
         * 2：请求到数据之后，需要将数据交给
         * 3: 需要有一个加载动画（loading），在请求过程中禁止用户做其他操作。
         */
        async fetchData () {
            this.loading = false;
            let switchStatus = await this.getSwitchStatus(); // 等待他执行，然后查看他的结果。这里并没有调用 then方法

            let [switchKeys, allFunName, promiseAll] = [Object.keys(switchStatus), this.getAllInfoFunName(), []];
            console.time('时间')
            switchKeys.forEach(item => {
                if (switchStatus[item]) {
                    let f = window.lodash.find(allFunName, (option) => {
                        return option.functionStatusKey === item;
                    });
                    promiseAll.push(f.functionName());
                }
            });

            await Promise.all(promiseAll).then((response) => {
                console.log(response, '这是Promise.all的返回值');
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false
                console.timeEnd('时间');
            });
            console.log("-------------华丽的分割线------------");
            console.log('两个请求，用时大概是5秒多，说明他们是同时进行的,分割线在时间之后，说明是在等promise执行之后才继续执行的。',)
        },

        /**
         * 这是预先定义好的一个数据，目的是为了与后台返回的状态值相匹配
         */
        getAllInfoFunName () {
            let allInfoFunName = [
                {
                    functionName: this.getFlowInfo,
                    functionStatusKey: 'flowSwitch'
                },
                {
                    functionName: this.getUserInfo,
                    functionStatusKey: 'userSwitch'
                },
                {
                    functionName: this.getVisaInfo,
                    functionStatusKey: 'visaSwitch'
                }
            ];
            return allInfoFunName;
        },

         /**
          * 获取开关状态，这里用setTimeout模拟axios的请求，
          */
         getSwitchStatus (time = 5000) {
            return new Promise(function (resolve,reject) {
                let json = null;
                setTimeout( () => {
                    json = {
                        flowSwitch: 0,
                        userSwitch: 1,
                        visaSwitch: 1
                    };
                    resolve(json);
                }, time);
            });
        },




        /**
         * 获取产品信息 getProductInfo
         */
        getProductInfo (time = 3000) {
            return new Promise(function (resolve) {
                setTimeout(() => {
                    console.log('终止执行');
                    resolve('我是第二个promise');
                }, time);
            });
        },

        /**
         * 获取流量信息
         */
        getFlowInfo (time = 5000) {
            return new Promise(function (resolve,reject) {
                let json = null;
                setTimeout( () => {
                    json = {
                    };
                    resolve(json);
                }, time);
            });

        },

        /**
         * 获取用户信息
         */
        getUserInfo (time = 5000) {
            return new Promise(function (resolve,reject) {
                let json = null;
                setTimeout(() => {
                    json = [
                        {a: 'a'},
                        {b: 'b'},
                        {c: 'c'}
                    ];
                    resolve(json);
                }, time);
            });

        },

        /**
         * 获取病毒、入侵信息
         */
        getVisaInfo (time = 5000) {
            return new Promise(function (resolve,reject) {
                let json = null;
                setTimeout(() => {
                    json = {
                        count: '15',// 入侵次数
                    };
                    resolve(json);
                }, time);
            });
        }
    }

}
</script>

<style scoped>

</style>

