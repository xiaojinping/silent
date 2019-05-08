const Koa = require('koa');
const app = new Koa();

const cors = require('koa2-cors')
app.use(cors())

app.use(async (ctx) => {
    ctx.body = 'hello silent, ';
});
// app.listen(3001, () => {
//     console.log('[silent] server starting at port 3001');
// });

module.exports = app;
