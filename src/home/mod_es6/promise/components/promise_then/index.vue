<template>
    <div>
        <jp-com-mode :title="'Promise.prototype.then()'">
            <div>
                <p>then方法是原型上的。</p>
                <p>then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。会将上一个then方法的返回结果作为参数，传入第二个回调函数,没有则是 undefined </p>
                <p>采用链式的then，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。例子当中的最后一个then,就是等待promiseTwo变化后才执行的</p>

            </div>
            <jp-output-code :title="'实例1'">
                mounted () {
                    this.promiseOne().then((response) => {
                        this.promiseResult.push(response);
                        console.log(response); //这里我什么也没有返回，
                    }).then((response) => { // 直接链式调用then
                        this.promiseResult.push(response);
                        console.log(response);
                        return this.promiseTwo();
                    }).then((response) => {
                        this.promiseResult.push(response);
                        console.log(response);
                    });
                },
                methods: {
                    promiseOne (time = 3000) {
                        return new Promise(function (resolve) {
                            setTimeout(() => {
                                resolve('我是第一个promise');
                            }, time);
                        });
                    },
                    promiseTwo (time = 5000) {
                        return new Promise(function (resolve,reject) {
                            reject('我是第二个promise');
                            });
                        }
                    }
                }
            </jp-output-code>
            <div class="result " >
                <span>执行结果</span>
                <p v-for="(item, index) in promiseResult " :key="index" v-text="item"></p>
            </div>

        </jp-com-mode>
    </div>
</template>

<script>
/*eslint-disable*/
export default {
    name: 'promise-then',
    data () {
        return {
            promiseResult: []
        };
    },
    mounted () {
        this.promiseOne().then((response) => {
            this.promiseResult.push(response);
            console.log(response); //这里我什么也没有返回，直接链式调用then
        }).then((response) => {
            console.log(response);
            this.promiseResult.push('这里应该是undefined');
            return this.promiseTwo();
        }).then((response) => {
            this.promiseResult.push(response);
            console.log(response,this.promiseResult);
        });

    },
    methods: {
        promiseOne (time = 1000) {
            return new Promise(function (resolve) {
                setTimeout(() => {
                    resolve('我是第一个promise');
                }, time);
            });
        },
        promiseTwo (time = 3000) {
            return new Promise(function (resolve) {
                setTimeout(() => {
                    resolve('我是第二个promise');
                }, time);
            });
        }
    }

}
</script>

<style scoped>

</style>
