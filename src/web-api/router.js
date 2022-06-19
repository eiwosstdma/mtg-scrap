"use strict";
const express = require("express");
const router = express.Router();

const { indexRoute } = require("./routes/index.route.js");

router.get("/", indexRoute);

module.exports = {
  router
};
