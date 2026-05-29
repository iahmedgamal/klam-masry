const rateLimit = require("express-rate-limit");
const { RATE_LIMIT } = require("../../utils/constant");

const generalLimiter = rateLimit({
  windowMs: RATE_LIMIT.GENERAL.WINDOW_MS,
  max: RATE_LIMIT.GENERAL.MAX_REQUESTS,
  message: { message: "Too many requests, please try again later." },
});

const searchLimiter = rateLimit({
  windowMs: RATE_LIMIT.SEARCH.WINDOW_MS,
  max: RATE_LIMIT.SEARCH.MAX_REQUESTS,
  message: { message: "Too many search requests, please slow down." },
});

module.exports = { generalLimiter, searchLimiter };
