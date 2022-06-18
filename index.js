/**
 * Node.js modules imports
 */

/**
 * Dependencies modules imports
 */
const dotenv = require("dotenv");

/**
 * Application modules Imports
 */
const { parseRawData } = require("./src/services/parser/parser.service.js");

/**
 * Application Initialisation
 */
dotenv.config();

/**
 * Application run
 */
(async () => {
  const someTxt = "<p>456</p>";
  await parseRawData(someTxt);
})();
