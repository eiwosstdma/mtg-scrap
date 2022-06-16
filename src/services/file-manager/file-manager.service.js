const { resolve } = require("path");
const { readFile } = require("fs/promises");
const { readFileSync, existsSync } = require("fs/promises");

/**
 * @param {string} fileName
 * @param {boolean} isNeedToBeAsync
 * @returns {Promise<string|null|undefined>}
 */
const getDataFromAFile = async (fileName, isNeedToBeAsync) => {
  if (typeof fileName !== "string") {
    throw new TypeError("jsonFileService: fileName Parameter is not a string.");
  }

  if (typeof isNeedToBeAsync !== "boolean") {
    throw new TypeError("jsonFileService: asyncOrNot parameter is not a boolean.");
  }

  const pathToTheFile = resolve("./data", fileName);
  const doesFileExist = existsSync(pathToTheFile);

  if (doesFileExist) {
    if (isNeedToBeAsync) {
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

const putDataInAFile = async (fileName, fileData) => {};

module.exports = {

};
