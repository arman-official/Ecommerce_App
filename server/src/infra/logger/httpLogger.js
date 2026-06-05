const pinoHttp = require("pino-http");
const { logger } = require("./logger");

const httpLogger = pinoHttp({ logger });

module.exports = { httpLogger };
