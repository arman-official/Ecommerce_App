const sendSuccess = (res, { statusCode = 200, message = "OK", data = null, meta = null } = {}) =>
  res.status(statusCode).json({
    success: true,
    message,
    data,
    meta
  });

const sendError = (res, { statusCode = 500, message = "Internal Server Error", errors = null } = {}) =>
  res.status(statusCode).json({
    success: false,
    message,
    errors
  });

module.exports = { sendSuccess, sendError };
