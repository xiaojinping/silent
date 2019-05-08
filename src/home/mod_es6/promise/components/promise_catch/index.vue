<template>
    <div>
        <jp-com-mode :title="'Promise.prototype.catch()'">
            <div>
                <p>Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。</p>
                <p>不同的是，catch方法可以捕捉运行过程当中的错误，例如then方法的错误,此时，catch方法里的回调得到的值是一个ReferenceError对象，而不是通过reject返回的值</p>
                <p>跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应,</p>
                <p>Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。当前Promise会报错并终止执行，不会有任何状态返回，相当于状态仍然是pending，所以不会执行then.catch以及finally:</p>
            </div>
            <jp-output-code :title="'实例1'">
                mounted () {
                    this.promiseOne().then((response) => {
                        this.dat = response.data.dat;// 故意报错,原因，response.data === undefined，与期望值不一致。
                    }).catch((error) => {
                        console.error(error); // 故意报错，他不会阻塞执行，
                        this.promiseResult.push(error);
                    });
                    // ##
                    // ##
                    // Promise 内部的错误不会影响到 Promise 外部的代码,当前Promise会终止，不会执行then.catch以及finally:
                    this.promiseTwo().then((response) => {
                        console.log('没有进来');
                    }).catch(() => {
                        console.log('没有进来');
                    }).finally(() =>{
                        console.log('没有进来');
                    });
                    // ##
                    setTimeout(() => { console.log(123) }, 5000)
                },
                methods: {
                    promiseOne (time = 3000) {
                        return new Promise(function (resolve) {
                            setTimeout(() => {
                                resolve('我是第一个promise');
                            }, time);
                        });
                    },
                    promiseTwo (time = 3000) {
                        return new Promise(function (resolve) {
                            setTimeout(() => {
                                let x = x + y;
                                console.log('终止执行');
                                resolve('我是第二个promise');
                            }, time);
                        });
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
    name: 'promise-catch',
    data () {
        return {
            promiseResult: []
        };
    },
    mounted () {
        this.promiseOne().then((response) => {
            this.dat = response.data.dat;// 故意报错,原因，response.data === undefined，与期望值不一致。
        }).catch((error) => {
            console.error(`${error} - 故意报错，他不会阻塞执行 `); // 故意报错，他不会阻塞执行，
            this.promiseResult.push(error.message);
        });

        // Promise 内部的错误不会影响到 Promise 外部的代码,当前Promise会终止，不会执行then.catch以及finally:
        this.promiseTwo().then((response) => {
            console.log('没有进来');
        }).catch(() => {
            console.log('没有进来');
        }).finally(() =>{
            console.log('没有进来');
        });
        setTimeout(() => { console.log(123) }, 5000);
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
                    let x = x + y;
                    console.log('终止执行');
                    resolve('我是第二个promise');
                }, time);
            });
        }
    }

}
</script>

<style scoped>

</style>
