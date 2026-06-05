const { createClient } = require("redis");
const { env } = require("./index");

const redisClient = createClient({ url: env.REDIS_URL });

redisClient.on("error", (error) => {
  console.error("Redis error", error);
});

const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
};

module.exports = { redisClient, connectRedis };
