const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaCors = require('@koa/cors');

const authRouter = require('./auth');

const PORT = process.env.PORT || 3000;


const app = new Koa();

app.use(KoaBody());
app.use(KoaCors());
app.use(authRouter.routes());


app.listen(PORT, () => {
  console.log(`Started at: http://localhost:${PORT}`);
});