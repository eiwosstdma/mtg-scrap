const { getRawDataFromEvent } = require("./scrap-manager.service.js");
const dotenv = require("dotenv");
dotenv.config();

test(`func: ${ getRawDataFromEvent.name } - Should return undefined for bad link.`, async () => {
  const data = await getRawDataFromEvent("https://uneadrressequinexistepasdutout.com");
  expect(data).toBeNull();
});
