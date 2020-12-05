const Joi = require('joi');


const createValidator = (joiObject) => {
  const validator = Joi.object(joiObject).messages({
    'any.required': 'Is Required'
  });
  return (key) => (ctx, next) => {
    const validated = validator.validate(ctx.request[key]);
    if (validated.error) {
      ctx.body = {
        error: validated.error.details.reduce((curr, err) => {
          return {
            ...curr,
            [err.context.label]: err.message,
          }
        }, {}),
      }
    } else {
      return next(ctx);
    }
  }
}

exports.createValidator = createValidator;
