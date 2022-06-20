const { getData, putData } = require("./file-manager.service.js");
const { writeFile, rm } = require("node:fs/promises");
const { join } = require("node:path");
const dotenv = require("dotenv");
dotenv.config();

/**
 * Test getData
 */
test(`func: ${ getData.name } - Should return null`, async () => {
  const data = await getData("file-not-exist.json", false);
  expect(data).toBeNull();
});

test(`func: ${ getData.name } - Should throw TypeError of invalid string parameter`, async () => {
  try {
    const data = await getData(789, false);
    expect(data).toBeUndefined();
  } catch (e) {
    expect(e.message).toBe(`${ getData.name }: fileName Parameter is not a string.`);
  }
});

test(`func: ${ getData.name } - Should throw TypeError of invalid boolean parameter`, async () => {
  try {
    const data = await getData("fake-file.json", 456);
    expect(data).toBeUndefined();
  } catch (e) {
    expect(e.message).toBe(`${ getData.name }: doesItNeedToBeAsync Parameter is not a boolean.`);
  }
});

test(`func: ${ getData.name } - Should find a file at ./data/fake-file.json`, async () => {
  const nameForTheFile = "fake-file.json";
  const someStr = "fake file dataaaaa";
  const pathToTheFakeFile = join(__dirname, `../../../${ process.env.DATA_FOLDER }/${ nameForTheFile }`);

  await writeFile(pathToTheFakeFile, someStr);

  const data = await getData(nameForTheFile, true);
  expect(data).toBe(someStr);

  await rm(pathToTheFakeFile);
});

/**
 * putData
 */
test(`func: ${ putData.name } - Should create a file and return true`, async () => {
  const nameForTheFile = "file.json";
  const someStr = "fake file data";
  const pathToTheFakeFile = join(__dirname, `../../../${ process.env.DATA_FOLDER }/${ nameForTheFile }`);

  const data = await putData(nameForTheFile, someStr);
  expect(data).toBeTruthy();

  await rm(pathToTheFakeFile);
});

test(`func: ${ putData.name } - Should thrown TypeError of length data invalid`, async () => {
  const nameForTheFile = "fake-file.json";
  const someStr = "";

  try {
    await putData(nameForTheFile, someStr);
  } catch (err) {
    expect(err.message).toBe(`${ putData.name }: fileData parameter is at length 0.`);
  }
});

test(`func: ${ putData.name } - Should thrown TypeError of invalid data parameter`, async () => {
  const nameForTheFile = 123456;
  const someStr = "fake file data";

  try {
    await putData(nameForTheFile, someStr);
  } catch (err) {
    expect(err.message).toBe(`${ putData.name }: fileName Parameter is not a string.`);
  }
});

test(`func: ${ putData.name } - Should thrown TypeError of invalid data parameter`, async () => {
  const nameForTheFile = "fake-file.json";
  const someStr = 45687;

  try {
    await putData(nameForTheFile, someStr);
  } catch (err) {
    expect(err.message).toBe(`${ putData.name }: fileData parameter is not a string.`);
  }
});
