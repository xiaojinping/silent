### Promisi.all()

`Promise.all`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```javascript
const p = Promise.all([p1, p2, p3]);
```

上面代码中，`Promise.all`方法接受一个数组作为参数，`p1`、`p2`、`p3`都是 Promise 实例，如果不是，就会先调用下面讲到的`Promise.resolve`方法，将参数转为 Promise 实例，再进一步处理。（`Promise.all`方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）

`p`的状态由`p1`、`p2`、`p3`决定，分成两种情况。

（1）只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数。

（2）只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。

下面是一个具体的例子。

```script

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

```