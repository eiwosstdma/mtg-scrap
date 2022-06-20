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
  const fakeHtml = `
    <h1 id="ded">aadde</h1>
    <hr>
    <p>efgzhifuiezlfjoue</p>  
  `;
  await parseRawData(fakeHtml);
})();
