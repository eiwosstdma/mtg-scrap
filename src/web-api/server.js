"use strict";
/**
 * Node.js modules imports
 */

/**
 * Dependencies modules imports
 */
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

/**
 * Application modules Imports
 */
const { router } = require("./router.js");
const { callLimitation } = require("./middlewares/call-limitation.middleware.js");

/**
 * Application Initialisation
 */
dotenv.config();

/**
 * Application run
 */
const run = async () => {
  const application = express();
  const port = process.env.API_PORT || 3000;
  const address = process.env.API_ADDRESS || "localhost";

  /**
   * Application Middlewares registration external modules
   */
  application.use(helmet());
  application.use(cors());
  application.use(bodyParser.json());
  application.use(cookieParser());

  /**
   * Application middlewares registration application modules
   */
  application.use(callLimitation);
  application.use("/api", router);

  application.listen(port, address, () => {
    console.log(`Server is running on http://${ address }:${ port }`);
  });
};

(async () => {
  await run();
})();
