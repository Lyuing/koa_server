const Koa = require('koa');
const app = new Koa();
const path = require('path');
const router = require('./router');

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// logger
app.use(async (ctx, next)=>{
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-response-time
app.use(async (ctx, next)=>{
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`)
})


app.on('error', (err, ctx)=>{
  log.error('server error')
  ctx.response.body = 'error'
})


// app.use(async (ctx, next)=>{
//   ctx.set('Access-Control-Allow-Origin', '*');
//   await next()
// })

// app.use(async ctx=>{
//   console.log('ctx.request.path',ctx.request.path)
//   ctx.body = 'Hello World'
// });

app.use(router.router.routes())

app.listen(8086)
console.log('server running at port 8086')
