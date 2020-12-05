const KoaRouter = require('koa-router');
const Joi = require('joi');

const auth = require('../auth');
const { createValidator } = require('../validator');

const authRouter = KoaRouter({prefix: '/auth'});


const authValidate = createValidator({
  login: Joi.string().required(),
  password: Joi.string().required(),
});

authRouter.get('/login', authValidate('query'), async ctx => {
  const res = await auth.login(
    ctx.request.query.login,
    ctx.request.query.password,
  );
  ctx.body = res;
});


module.exports = authRouter;