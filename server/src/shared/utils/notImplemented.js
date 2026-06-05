const { sendError } = require("./response");

const notImplemented = (feature) => (req, res) =>
  sendError(res, {
    statusCode: 501,
    message: `${feature} not implemented`
  });

module.exports = { notImplemented };
