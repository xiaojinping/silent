


## html 示例
```html
<el-button type="primary" @click="fetchDataPage('user/setcookies', 'post')">设置cookie</el-button>
<el-button type="primary" @click="fetchDataPage('login/getcookies', 'post')">获取cookie</el-button>
```

## axios 请求示例，重点关注跨域


这里可以传一个param过去，例如 ： [{name:'author,value:'xjp',option:{}},{name,value,option}],后台接收后，依次设置。


```js
fetchDataPage (url, type = 'get') {
    axios({
        url: `${window.BASE.URL}${url}`,
        method: type,
        withCredentials: true // 允许跨域发生cookie
    }).then( (response) => {
        console.log(response)
    }).catch((error) => {
        console.error(error);
    });
}
```


## koa2 代码

这是一个完整的代码，为了注释，我把他截断了，如果有需要，只需要从上到下全复制过去就行。不影响运行。



```js
const Koa = require('koa');
const app = new Koa();
```


// 这也是跨域，但是，他和cookie跨域不是一样的，没有他，任务接口都不允许跨域，有了他，表示接口可以跨域。但是cookie并不一定可以。


```js
const cors = require('koa2-cors')
app.use(cors());

```

// 创建路由， router, user, login, 可以根据自己喜欢定义。

```js
const Router = require('koa-router');
const router = new Router();
const user = new Router();
const login = new Router();
```

// 设置cookies 实际上，这里可以接收一个前端传进来的参数，比如，cookie的名称，cookie的值，可以是数组，可以是对象。

```js
user.post('/setcookies',  (ctx) => {
    ctx.cookies.set('author', 'xiaoasjp', {
        domain: '127.0.0.1', // 写cookie所在的域名 。
        path: '/login/getcookies', // 写coolie 所在的路径 。此路径，可以看成是一个api的请求地址。只有这个请求地址可以访问
        maxAge: 1000 * 60 * 60 * 24, // cookie 有效时长。（1天）
        expires: new Date('2020-12-30'), // cookie 失效时间
        httpOnly: false, // 是否只用于http请求中。
        overwrite: false //是否允许重写
    });
    ctx.body = {
        status: 1
    };
});
```

//  获取cookies , 同样，这里可以接收前端的参数。要获取谁的cookie;


```js
login.post('/getcookies',  (ctx) => {
    let author = ctx.cookies.get('author');
    if (author) {
        ctx.body = {
            status: 1,
            author
        };
    }else {
        ctx.body = {
            status: 2,
            msg: 'cookie is not found'
        }
    }
});
```
```js
router
    .use('/user', user.routes(), user.allowedMethods())
    .use('/login', login.routes(), login.allowedMethods());
```

// cookie跨域

```js
app.use(async (ctx,next) => {
    ctx.set('Access-Control-Allow-Credentials', true);
    next();
});
```
```js
app.use(router.routes(), router.allowedMethods());
module.exports = app;
```









