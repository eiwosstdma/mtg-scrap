"use strict";
const { resolve } = require("node:path");
const { readFile, writeFile } = require("node:fs/promises");
const { readFileSync, existsSync } = require("node:fs");

/**
 * @param {string} fileName
 * @param {boolean} doesItNeedToBeAsync
 * @returns {Promise<string|null|undefined>}
 */
const getData = async (fileName, doesItNeedToBeAsync) => {
  if (typeof fileName !== "string") {
    throw new TypeError(`${ getData.name }: fileName Parameter is not a string.`);
  }

  if (typeof doesItNeedToBeAsync !== "boolean") {
    throw new TypeError(`${ getData.name }: doesItNeedToBeAsync Parameter is not a boolean.`);
  }

  const pathToTheFile = resolve(process.env.DATA_FOLDER, fileName);
  const doesFileExist = existsSync(pathToTheFile);

  if (doesFileExist) {
    if (doesItNeedToBeAsync) {
      try {
        const data = await readFile(pathToTheFile, "utf-8");
        return data.toString();
      } catch (err) {
        console.log(err);
        return undefined;
      }
    } else {
      const data = readFileSync(pathToTheFile, { encoding: "utf-8" });
      return data.toString();
    }
  } else {
    return null;
  }
};

/**
 * @param {string} fileName
 * @param {string} fileData
 * @returns {Promise<boolean>}
 */
const putData = async (fileName, fileData) => {
  if (typeof fileName !== "string") {
    throw new TypeError(`${ putData.name }: fileName Parameter is not a string.`);
  }

  if (typeof fileData !== "string") {
    throw new TypeError(`${ putData.name }: fileData parameter is not a string.`);
  }

  if (fileData.length === 0) {
    throw new TypeError(`${ putData.name }: fileData parameter is at length 0.`);
  }

  try {
    const pathToTheFile = resolve(process.env.DATA_FOLDER, fileName);
    await writeFile(pathToTheFile, fileData);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  getData,
  putData
};
