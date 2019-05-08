### Promisi.prototype.finally()


finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。

基本写法和then,catch方法相同

finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。

```script

    mounted () {
        this.promiseOne()
            .then((...response) => {
                console.log(response);
            })
            .catch()
            .finally((...values)=>{
                console.log('成功了，然后我执行', values);
                // this.loading = false;
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

```