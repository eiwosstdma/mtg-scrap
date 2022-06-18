"use strict";
const { load } = require("cheerio");

/**
 * @param {string} rawText - A string that represent the body or total html of a page
 * @param {object} schema - Rules for the parser to parse the data
 * @returns {Promise<void>}
 */
const parseRawData = async (rawText, schema) => {
  if (typeof rawText !== "string") {
    throw new TypeError(`${ parseRawData.name }: rawText is not a string.`);
  }

  if (!(schema instanceof Object)) {
    throw new TypeError(`${ parseRawData.name }: schema is not an object.`);
  }

  const rawHtml = load(rawText);
  console.log(rawHtml.html());
};

module.exports = {
  parseRawData
};
