const { AppError } = require("../errors/AppError");

const authorize = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return next(new AppError("Forbidden", 403));
  }
  return next();
};

module.exports = { authorize };
