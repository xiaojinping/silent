
/**
 * @description silent server
 */

const Koa = require('koa');
const app = new Koa();

const cors = require('koa2-cors')
app.use(cors());

const bodyParser = require('koa-bodyparser')
app.use(bodyParser());

const Router = require('koa-router');
const router = new Router();
const vuex = new Router();
const vue = new Router();
const user = new Router();
const login = new Router();

router
    .get('/koa', (ctx) => {
        let request = ctx.request; // request对象
        let data = request.query; // 获取 get 的 请求参数 json格式
        ctx.body = {
            data
        };
    })
    .post('/user', (ctx) => {
        let postData = ctx.request.body;
        ctx.body = ctx.request.query;
        console.log(ctx.request.query, postData, '为什么是个空值 ');
    });
vuex
    .post('/state', (ctx) => {
        ctx.body = 'this is vuex store.state';
    })
    .post('/mutations', (ctx) => {
        ctx.body = 'this is vuex store,commit';
    })
    .post('getters', (ctx) => {
        ctx.body = 'this is vuex store,commit';
    });
vue
    .post('/watch', (ctx) => {
        ctx.body = 'this is vue watch info';
    })
    .post('/computed', (ctx) => {
        ctx.body = 'this is vue computed info';
    });
user.post('/setcookies',  (ctx) => {
    ctx.cookies.set('author', 'xiaoasjp', {
        domain: '127.0.0.1', // 写cookie所在的域名 。
        path: '/login/getcookies', // 写coolie 所在的路径 。此路径，可以看成是一个api的请求地址。只有这个请求地址可以访问
        maxAge: 1000 * 60 * 60 * 24, // cookie 有效时长。（1天）
        expires: new Date('2020-12-30'), // cookie 失效时间
        httpOnly: false, // 是否只用于http请求中。
        overwrite: false //是否允许重写
    });
    let username = ctx.cookies.get('author');
    ctx.body = {
        status: 1
    };
});

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

router
    .use('/user', user.routes(), user.allowedMethods())
    .use('/login', login.routes(), login.allowedMethods())
    .use('/vuex', vuex.routes(), vuex.allowedMethods())
    .use('/vue', vue.routes(), vue.allowedMethods());
app.use(async (ctx,next) => {
    ctx.set('Access-Control-Allow-Credentials', true);
    next();
});
app.use(router.routes(), router.allowedMethods());


module.exports = app;
