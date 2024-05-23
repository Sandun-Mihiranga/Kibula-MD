// config.js
const fs = require("fs");
require("dotenv").config();

const toBool = (x) => x === "true";

const config = {
  SESSION_ID: process.env.SESSION_ID || "Your Session Id",
  AUTO_STATUS_SEEN: toBool(process.env.AUTO_STATUS_SEEN) || true,
  REJECT_CALL: process.env.REJECT_CALL || false,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Sid bhai",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "919142294671",
  WELCOME: process.env.WELCOME || false,
};

module.exports = config;