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
const { getRawData } = require("./src/services/scrap/scrap.service.js");
const { parseRawData } = require("./src/services/parser/parser.service.js");

/**
 * Application Initialisation
 */
dotenv.config();

/**
 * Application run
 */
(async () => {
  const data = await getRawData("https://magic.wizards.com/en/articles/archive/mtgo-standings/modern-preliminary-2022-06-22");
  const parsedData = await parseRawData(data);

  console.log(parsedData);
})();
