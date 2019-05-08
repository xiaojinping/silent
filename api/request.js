
/**
 * @description koa 如何接收 ajax 请求
 */

const Koa = require('koa');
const app = new Koa();

const cors = require('koa2-cors')
app.use(cors());

const bodyParser = require('koa-bodyparser')
app.use(bodyParser());

app.use(async (ctx) => {
    console.log(ctx.method);
    if (ctx.method === 'POST') {
        let postData = ctx.request.body;
        ctx.body = ctx.request.query;
        console.log(ctx.request.query, postData, '为什么是个空值 ');
    } else {
        let request = ctx.request; // request对象
        let url = ctx.url; // 通过 ctx 上下文 获取请求的url
        let URL = request.url; // 通过 request 获取请求的url,
        let req_query = request.query; // 获取 get 的 请求参数 json格式
        let req_querystring = request.querystring; // 获取 get 的 请求参数 字符串格式
        ctx.body = {
            url,
            URL,
            req_query,
            req_querystring
        };
    }
});
// app.listen(3001, () => {
//     console.log('[silent] server starting at port 3002');
// });
module.exports = app;
