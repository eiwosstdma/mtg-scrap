const { resolve } = require("path");
const { readFile } = require("fs/promises");
const { readFileSync, existsSync } = require("fs");

const moduleFileName = "file-manager.service.js"

/**
 * @param {string} fileName
 * @param {boolean} doesItNeedToBeAsync
 * @returns {Promise<string|null|undefined>}
 */
const getDataFromAFile = async (fileName, doesItNeedToBeAsync) => {
  if (typeof fileName !== "string") {
    throw new TypeError(`${ moduleFileName }: fileName Parameter is not a string.`);
  }

  if (typeof doesItNeedToBeAsync !== "boolean") {
    throw new TypeError(`${ moduleFileName }: doesItNeedToBeAsync Parameter is not a boolean.`);
  }

  const pathToTheFile = resolve(`${process.env.DATAFOLDER}`, fileName);
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

module.exports = {
  getDataFromAFile
};
