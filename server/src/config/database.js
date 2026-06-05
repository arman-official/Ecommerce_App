const mongoose = require("mongoose");
const { env } = require("./index");

const connectDatabase = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect(env.MONGO_URI);
};

module.exports = { connectDatabase };
