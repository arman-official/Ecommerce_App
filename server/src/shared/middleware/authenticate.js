const jwt = require("jsonwebtoken");
const { env } = require("../../config");
const { AppError } = require("../errors/AppError");

const authenticate = (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : req.cookies?.accessToken;

  if (!token) {
    return next(new AppError("Authentication required", 401));
  }

  try {
    const payload = jwt.verify(token, env.JWT_ACCESS_SECRET);
    req.user = payload;
    return next();
  } catch (error) {
    return next(new AppError("Invalid or expired token", 401));
  }
};

module.exports = { authenticate };
