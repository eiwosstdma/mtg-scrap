const { getDataFromAFile, putDataInAFile } = require("./file-manager.service.js");
const { writeFile, rm } = require("fs/promises");
const { join } = require("path");
const dotenv = require("dotenv");
dotenv.config();

/**
 * Test getDataFromAFile
 */
test(`func: ${ getDataFromAFile.name } - Should return null`, async () => {
  const data = await getDataFromAFile("file-not-exist.json", false);
  expect(data).toBeNull();
});

test(`func: ${ getDataFromAFile.name } - Should throw TypeError of invalid string parameter`, async () => {
  try {
    const data = await getDataFromAFile(789, false);
    expect(data).toBeUndefined();
  } catch (e) {
    expect(e.message).toBe(`${ getDataFromAFile.name }: fileName Parameter is not a string.`);
  }
});

test(`func: ${ getDataFromAFile.name } - Should throw TypeError of invalid boolean parameter`, async () => {
  try {
    const data = await getDataFromAFile("fake-file.json", 456);
    expect(data).toBeUndefined();
  } catch (e) {
    expect(e.message).toBe(`${ getDataFromAFile.name }: doesItNeedToBeAsync Parameter is not a boolean.`);
  }
});

test(`func: ${ getDataFromAFile.name } - Should find a file at ./data/fake-file.json`, async () => {
  const nameForTheFile = "fake-file.json";
  const someStr = "fake file data";
  const pathToTheFakeFile = join(__dirname, `../../../${ process.env.DATAFOLDER }/${ nameForTheFile }`);
  await writeFile(pathToTheFakeFile, someStr);

  const data = await getDataFromAFile(nameForTheFile, false);
  expect(data).toBe("fake file data");

  await rm(pathToTheFakeFile);
});

/**
 * putDataInAFile
 */
test(`func: ${ putDataInAFile.name } - Should create a file and return true`, async () => {
  const nameForTheFile = "fake-file.json";
  const someStr = "fake file data";
  const pathToTheFakeFile = join(__dirname, `../../../${ process.env.DATAFOLDER }/${ nameForTheFile }`);

  const data = await putDataInAFile(nameForTheFile, someStr);
  expect(data).toBeTruthy();

  await rm(pathToTheFakeFile);
});

test(`func: ${ putDataInAFile.name } - Should thrown TypeError of length data invalid`, async () => {
  const nameForTheFile = "fake-file.json";
  const someStr = "";
  const pathToTheFakeFile = join(__dirname, `../../../${ process.env.DATAFOLDER }/${ nameForTheFile }`);

  try {
    const data = await putDataInAFile(nameForTheFile, someStr);
  } catch (err) {
    expect(err.message).toBe(`${ putDataInAFile.name }: fileData parameter is at length 0.`);
  }
});

test(`func: ${ putDataInAFile.name } - Should thrown TypeError of invalid data parameter`, async () => {
  const nameForTheFile = 123456;
  const someStr = "fake file data";
  const pathToTheFakeFile = join(__dirname, `../../../${ process.env.DATAFOLDER }/${ nameForTheFile }`);

  try {
    const data = await putDataInAFile(nameForTheFile, someStr);
  } catch (err) {
    expect(err.message).toBe(`${ putDataInAFile.name }: fileName Parameter is not a string.`);
  }
});

test(`func: ${ putDataInAFile.name } - Should thrown TypeError of invalid data parameter`, async () => {
  const nameForTheFile = "fake-file.json";
  const someStr = 45687;
  const pathToTheFakeFile = join(__dirname, `../../../${ process.env.DATAFOLDER }/${ nameForTheFile }`);

  try {
    const data = await putDataInAFile(nameForTheFile, someStr);
  } catch (err) {
    expect(err.message).toBe(`${ putDataInAFile.name }: fileData parameter is not a string.`);
  }
});
