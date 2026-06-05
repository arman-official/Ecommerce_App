const { AppError } = require("../errors/AppError");

const validate = (schema) => (req, res, next) => {
  const parsed = schema.safeParse({
    body: req.body,
    query: req.query,
    params: req.params
  });

  if (!parsed.success) {
    const errors = parsed.error.flatten();
    return next(new AppError("Validation failed", 422, errors));
  }

  req.validated = parsed.data;
  return next();
};

module.exports = { validate };
