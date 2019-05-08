# koa2

### 安装
在项目的根目录下新建一个文件 api (文件名可以根据个人喜欢)，

执行

mkdir api


cd api


npm init -y


npm install --save koa 安装 koa



### 一个简单的模板

一个简单的koa的示例


1：引入 koa, 在koa2里， koa是一个class, 所以，需要 new;

2: 注册，通过 use注册，
    他的每个注册都可以看成是一个 中间件，包含两个参数。ctx, next ctx是一个对象， next是一个方法，
    这两个方法留到后面讲，



3: 监听端口

4：如何启动，这里先在 win命令窗口执行 node [filename].js; 例如： node index.js

```javascript
// 1: 引入
const Koa = require('koa');
const app = new Koa();
```

```javascript
// 2 ：注册
app.use(async (ctx) => {
    // ctx.body， 简单的来说就是 response, 后面再讲。
    ctx.body = 'hello silent';
});
```

```javascript
// 3：监听
app.listen(3001, () => {
    console.log('[silent] server starting at port 3000');
});
```

至此，一个简单的 koa 服务器就搭建完成 了。

有志于一名全栈的开发人员，肯定会在想， 这段代码 在 node命令里，可以执行，那么，如何让他在我们的vue项目里运行。

### 如何在 vue 项目里 请求这个接口


我在vue的mounted里用axios请求这个接口，如果对axios不是很了解的，可以用ajax也是一样，或者花点时间看下axios

```javascript
axios({
    url: 'http://127.0.0.1:3001', // 这里我们先写死，后面再来讲如何配置。
    method: 'get'
}).then( (response) => {
    console.log(response)
}).catch((error) => {
    console.error(error);
});
```

此时，我们会发现，跨域了，因为端口不同。




在这里，我们需要引入一个中间件。 npm install koa2-cors


然后在我们的 koa 代码中这样 引入 koa2-cors

```javascript
const cors = require('koa2-cors')
app.use(cors())
```

最终的 koa代码应该是这样的。

```javascript
//  引入 koa 并实例化。
const Koa = require('koa');
const app = new Koa();
// 引入 中间件 cors
const cors = require('koa2-cors')
app.use(cors())
//  注册
app.use(async (ctx) => {
    ctx.body = 'hello silent';
});
app.listen(3001, () => {
    console.log('[silent] server starting at port 3001');
});
```


重启 koa服务，成功请求到内容


#### 问题 配置 url


生产环境和开发环境不一样，我们如何来配置他。


#### 问题 如何规范 api


在实际的项目中，我们通常的做法是让api的url保持一致，通过不同的名称来标识。 也说是如何规范化api


一个项目当中，不止一个接口文件，如何规范这些 api, 暴露接口。




