const { existsSync, rmSync } = require("node:fs");
const { join } = require("node:path");

const dotenv = require("dotenv");
dotenv.config();

const { initDB } = require("./init-db.service.js");

test(`func: ${ initDB.name } - Should create a file database.db in data`, async () => {
  const dataFolder = (process.env.DATA_FOLDER.length >= 2) ? process.env.DATA_FOLDER : "data";
  const pathToDB = join(__dirname, `../../../${ dataFolder }/database.db`);

  await initDB();

  const isDBCreated = existsSync(pathToDB);

  expect(isDBCreated).toBeTruthy();

  rmSync(pathToDB);
});
