const nodemailer = require("nodemailer");
const { env } = require("./index");

const mailer = env.SMTP_HOST
  ? nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_PORT === 465,
      auth: env.SMTP_USER
        ? {
            user: env.SMTP_USER,
            pass: env.SMTP_PASS
          }
        : undefined
    })
  : null;

module.exports = { mailer };
