"use strict";
const { writeFileSync } = require("node:fs");
const { join } = require("node:path");

/**
 *
 * @returns {Promise<boolean>} - return true if init succeed, false otherwise;
 */
const initDB = async () => {
  const dataFolder = (process.env.DATA_FOLDER.length >= 2) ? process.env.DATA_FOLDER : "data";

  const pathToDB = join(__dirname, `../../../${ dataFolder }/database.db`);

  try {
    writeFileSync(pathToDB, "");

    return true;
  } catch (err) {
    return false;
  }
};

module.exports = {
  initDB
};
