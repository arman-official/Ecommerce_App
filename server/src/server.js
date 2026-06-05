require("dotenv").config();
const http = require("http");
const { app } = require("./app");
const { env } = require("./config");
const { connectDatabase } = require("./config/database");
const { connectRedis } = require("./config/redis");
const { logger } = require("./infra/logger/logger");
const { initializeSocket } = require("./infra/socket/socketServer");

const startServer = async () => {
  await connectDatabase();
  await connectRedis();

  const server = http.createServer(app);
  initializeSocket(server);

  server.listen(env.PORT, () => {
    logger.info(`Server running on port ${env.PORT}`);
  });
};

startServer().catch((error) => {
  logger.error({ err: error }, "Failed to start server");
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  logger.error({ err: error }, "Unhandled rejection");
});

process.on("uncaughtException", (error) => {
  logger.error({ err: error }, "Uncaught exception");
  process.exit(1);
});
