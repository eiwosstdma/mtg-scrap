const { urlBuilder } = require("./url-builder.service.js");

test(`func: ${ urlBuilder.name } - formatName parameter should be a string`, async () => {
  const dateForBuilder = {
    day: 12,
    month: 45
  }

  try {
    const data = await urlBuilder(456, "challenge", dateForBuilder, "mtgo");
  } catch (err) {
    expect(err.message).toBe(`${ urlBuilder.name }: formatName is not a string`);
  }
});

test(`func: ${ urlBuilder.name } -  eventType should be a string`, async () => {
  const dateForBuilder = {
    day: 12,
    month: 45
  }

  try {
    const data = await urlBuilder("modern", 789, dateForBuilder, "mtgo");
  } catch (err) {
    expect(err.message).toBe(`${ urlBuilder.name }: eventType is not a string`);
  }
});

test(`func: ${ urlBuilder.name } - formatDate parameter should be an object`, async () => {
  try {
    const data = await urlBuilder("modern", "challenge", 789, "mtgo");
  } catch (err) {
    expect(err.message).toBe(`${ urlBuilder.name }: formatDate is not an object`);
  }
});

test(`func: ${ urlBuilder.name } - formatDate parameter should be an object`, async () => {
  const dateForBuilder = {
    day: 12,
    month: 45
  }

  const data = await urlBuilder("modern", "challenge", dateForBuilder, "mtgo");
  expect(data).toBe(`https://magic.wizards.com/en/articles/archive/mtgo-standings/modern-challenge-2022-45-12`);
});
