const { env } = require("./index");

const stripe = env.STRIPE_SECRET_KEY
  ? require("stripe")(env.STRIPE_SECRET_KEY)
  : null;

module.exports = { stripe };
