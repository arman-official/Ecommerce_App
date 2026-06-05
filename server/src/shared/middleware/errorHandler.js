const { logger } = require("../../infra/logger/logger");
const { sendError } = require("../utils/response");

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const errors = err.details || null;

  logger.error({ err, path: req.originalUrl, method: req.method });

  return sendError(res, { statusCode, message, errors });
};

module.exports = { errorHandler };
