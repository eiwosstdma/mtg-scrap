const { getDataFromAFile } = require("./file-manager.service.js");
const { writeFile, rm } = require("fs/promises");
const { join } = require("path");
const dotenv = require("dotenv");
dotenv.config();

test("Should return null", async () => {
  const data = await getDataFromAFile("file-not-exist.json", false);
  expect(data).toBeNull();
});

test("Should throw TypeError of invalid string parameter", async () => {
  try {
    const data = await getDataFromAFile(789, false);
    expect(data).toBeUndefined();
  } catch (e) {
    expect(e.message).toBe("file-manager.service.js: fileName Parameter is not a string.");
  }
});

test("Should thrown TypeError of invalid boolean parameter", async () => {
  try {
    const data = await getDataFromAFile("fake-file.json", 456);
    expect(data).toBeUndefined();
  } catch (e) {
    expect(e.message).toBe("file-manager.service.js: doesItNeedToBeAsync Parameter is not a boolean.");
  }
});

test("Should find a file at ./data/fake-file.json", async () => {
  const nameForTheFile = "fake-file.json";
  const someStr = "fake file data";
  const pathToTheFakeFile = join(__dirname, `../../../${ process.env.DATAFOLDER }/${ nameForTheFile }`);
  await writeFile(pathToTheFakeFile, someStr);

  const data = await getDataFromAFile(nameForTheFile, false);
  expect(data).toBe("fake file data");

  await rm(pathToTheFakeFile);
});
