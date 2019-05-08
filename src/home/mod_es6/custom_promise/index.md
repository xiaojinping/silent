### Promisi.prototype.finally()


finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。

基本写法和then,catch方法相同

finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。

```script

let promise = new Promise((resolve, reject) => {
    /**
    *  问题1：这个函数是用户传进去的，也就是说，这是一个回调函数，这个问题函数内有两个可执行函数， resolve,reject，
    * 问题2： resolve,reject这两个函数又是哪里的，是原型上的。
    */
});

promise.then((res) => {
    /**
     * 1: then 方法 是定义在原型上的，但是then方法的支持两个回调函数，这两个回调函数是定义在哪的。 succse, faild
     * 2：以succse方法为例，他的 res 参数是怎么获取到的。
     */
});
    
```
