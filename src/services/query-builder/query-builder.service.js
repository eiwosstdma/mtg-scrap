"use strict";
const { join } = require("node:path");
const knex = require("knex");

/**
 * @returns {Promise<*|Knex<any, unknown[]>|null>}
 */
const queryBuilder = async () => {
  const isSql = process.env.DATA_FORMAT;

  if (isSql === "sql") {
    const dataFolder = (process.env.DATA_FOLDER.length >= 2) ? process.env.DATA_FOLDER : "data";

    const pathToDBFile = join(__dirname, `../../../${ dataFolder }/database.db`);

    return knex({
      client: 'sqlite3',
      connection: {
        filename: pathToDBFile
      }
    });
  } else return null;
};

module.exports = {
  queryBuilder
};
