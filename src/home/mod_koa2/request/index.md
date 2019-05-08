## 如何获取 get 请求参数。


在 koa2 中，可以通过query 或者 querystring 接收 get 参数。


query 返回的是一个json 格式的数据，querystring 返回的是一个字符串形式的数据。


query可以通过上下文直接获取，也可以通过 上下文的request对象来获取。


ctx.query  ctx.request.query 都是可以获取到查询参数的。




```javascript
const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors')
app.use(cors());
app.use(async (ctx) => {
    let request = ctx.request; // request对象
    let url = ctx.url; // 通过 ctx 上下文 获取请求的url
    let URL = request.url; // 通过 request 获取请求的url,
    let req_query = request.query; // 获取 get 的 请求参数 json格式
    let req_querystring = request.querystring; // 获取 get 的 请求参数 字符串格式
    // ctx.body 响应数据，我们在这里先不说，只需要知道这里是ajax的返回值就行。
    ctx.body = {
        url,
        URL,
        req_query,
        req_querystring
    };
});
app.listen(3001, () => {
    console.log('[silent] server starting at port 3001');
});
```


### request


在上面的代码中，我们指出， ctx.request.url 和 ctx.url 是等同的。我们把前者叫别名，后者叫访问器。

怎么实现的，有一种猜测

```js
let ctx = {
    url : '',
    req:{
        url: ''
    }
}
ctx.req.url = ctx.url;
```


ctx.request 的更多别名和访问器，可以看 [官方文档](https://koa.bootcss.com/#request)


后面如果认为还有哪个比较重要，再来说说。


关于request的东西到此结束。


### post 请求 如何接收参数。




在谈论这个问题之前，我们来讨论一个问题，get请求和post请求有什么区别，

userName=sdfa&age=aa&webSite=11b



 省略一万字



在很早之前，我们是用表单来提交的，


现在，我们一般是用ajax提交，


如果是采用ajax提交，post和get在参数上是同样的形式，


所以，post同样是可以用 query, querystring来获取参数，


但是，但是，如果是表单提交呢。 我们发现采用这种方式来接收参数是个空的对象。


我们要如何处理。



对于表单post请求参数的接收，如果让我们用原生的方式实现，也是可以的，不过比较麻烦，不是我们的重点讲解内容，代码放到最后


用原生的方式的方式去获取参数太麻烦，我们一般使用一个中间件： koa-bodyparser中间件


安装：


npm install --save koa-bodyparser@3


引入


const bodyParser = require('koa-bodyparser');


注册


app.use(bodyParser());


```javascript
app.use(async (ctx) => {
    if (ctx.method === 'POST') {
        let pastData = ctx.request.body; // 表单方式，
        ctx.body = pastData;
    }
});
```




原生获取post请求的参数，，了解即可，只需要关注两个 ctx.req.on('data', () => {}); ctx.req.addListener('end',()=>{});


```javascript
function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postdata="";
            // 这一步是做什么，获取数据。
		    ctx.req.on('data',(data)=>{
		        postdata += data
		    })
            // 接收最后一个字节成功后，表示成功。
		    ctx.req.addListener("end",function(){
		        resolve(postdata);
			})
		} catch (error) {
			reject(error);
        }
	});
}
// 在一个响应当中，返回,
ctx.body = await parsePostData();
// 此时，返回的就是一段字符串，相当于 request.querystring, 我们还需要写一个函数将这个字符串解析出来。
function parseQueryStr(queryStr){
    let queryData={};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData
}
```

