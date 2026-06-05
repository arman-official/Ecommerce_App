const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { env } = require("./config");
const { apiLimiter } = require("./shared/middleware/rateLimiter");
const { httpLogger } = require("./infra/logger/httpLogger");
const { errorHandler } = require("./shared/middleware/errorHandler");
const routes = require("./routes");

const app = express();

app.use(httpLogger);
app.use(helmet());
app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: true
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(apiLimiter);

app.use("/api/v1", routes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.use(errorHandler);

module.exports = { app };
