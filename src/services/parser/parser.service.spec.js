const { parseRawData } = require("./parser.service.js");

test(`func: ${ parseRawData.name } - Should throw a string TypeError`, async () => {
  const someTxt = "<p></p>";
  const someSchema = {};

  try {
    await parseRawData(123);
  } catch (err) {
    expect(err.message).toBe(`${ parseRawData.name }: rawText is not a string.`);
  }
});
