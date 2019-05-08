<template>
    <div>
        <jp-com-mode :title="'基本用法'">
            <div>
                <p>Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。</p>
                <p>
                    resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
                    在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），
                    在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去
                </p>
                <div class="important">
                    <p> Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。</p>
                    <p><span>问题：</span> 这种方式 与 .catch()有什么区别？</p>
                    <p><span>问题答案在：</span> <router-link to="/promise_catch"> Promise.prototype.cath</router-link></p>
                    <p>一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。</p>
                </div>
                <p>
                    then方法可以接受两个回调函数作为参数。
                    第一个回调函数是Promise对象的状态变为resolved时调用，
                    第二个回调函数是Promise对象的状态变为rejected时调用。
                    其中，第二个函数是可选的，不一定要提供。
                    这两个函数都接受Promise对象传出的值作为参数
                </p>
            </div>
            <jp-output-code>
                mounted () {
                    this.featchData().then((response) => {
                        this.featchDataValue = response;
                    }).catch((response) => {
                        this.featchDataValue = response;
                        //  一般请求失败的时候，会有一个机制，比如说：弹窗，告诉用户失败原因。
                    });;
                },
                methods: {
                    featchData (time = 5000) {
                        return new Promise(function (resolve, reject) {
                            /**
                            * 我假设setTimeout是一个异步的请求，例如ajax 或者 axios;
                            * 如果请求成功，就resolve,如果失败就是reject
                            * axios.post().then(()=>reolve(true)).catch(reject(error));
                            */
                            setTimeout(() => {
                                let response = {
                                    text: '成功',
                                    status: 'resolved'
                                };
                                let errorMsg = {
                                    text: '失败',
                                    status: 'rejected'
                                };

                                let nowSeconds = new Date().getSeconds();
                                let selfSeconds = 30;
                                let bool = nowSeconds >= selfSeconds;
                                if (bool) {
                                resolve(response);
                                } else {
                                reject(errorMsg);
                                }
                            }, time);
                        });
                    }
                }
                ……
            </jp-output-code>
            <div class="result " >
                <p>执行结果：<span :class="[featchDataValue.status]" v-text="featchDataValue.text"></span></p>
            </div>
        </jp-com-mode>
    </div>
</template>

<script>
export default {
    name: 'promise-basics',
    data () {
        return {
            featchDataValue: {
                text: '请求中……',
                status: 'pending'
            }
        };
    },
    mounted () {
        this.featchData().then((response) => {
            this.featchDataValue = response;
        }).catch((response) => {
            this.featchDataValue = response;
        });
    },
    methods: {
        featchData (time = 5000) {
            return new Promise(function (resolve, reject) {
                /**
                 * 我假设setTimeout是一个异步的请求，例如ajax 或者 axios;
                 * 如果请求成功，就resolve,如果失败就是reject
                 * axios.post().then(()=>reolve(true)).catch(reject(error));
                 */
                setTimeout(() => {
                    let response = {
                        text: '成功',
                        status: 'resolved'
                    };
                    let errorMsg = {
                        text: '失败',
                        status: 'rejected'
                    };
                    let nowSeconds = new Date().getSeconds();
                    let selfSeconds = 30;
                    let bool = nowSeconds >= selfSeconds;
                    if (bool) {
                        resolve(response);
                    } else {
                        reject(errorMsg);
                    }
                }, time);
            });
        }
    }
}
</script>

<style scoped>

</style>
