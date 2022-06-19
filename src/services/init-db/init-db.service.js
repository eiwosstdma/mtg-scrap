"use strict";
const { writeFileSync } = require("node:fs");
const { join } = require("node:path");

const knex = require("knex");

const initDB = async () => {
  const dataFolder = (process.env.DATA_FOLDER.length >= 2) ? process.env.DATA_FOLDER : "data";

  const pathToDB = join(__dirname, `../../../${ dataFolder }/database.db`);
  writeFileSync(pathToDB, "");
};

module.exports = {};
