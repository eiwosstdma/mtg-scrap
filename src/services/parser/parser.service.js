"use strict";
const { load, html } = require("cheerio");
const { JSDOM } = require("jsdom");

/**
 * @param {string} rawText - A string that represent the body or total html of a page
 * @returns {Promise<void>}
 */
const parseRawData = async (rawText) => {
  if (typeof rawText !== "string") {
    throw new TypeError(`${ parseRawData.name }: rawText is not a string.`);
  }

  // const newElement = new JSDOM(rawText);
  // const document = newElement.window.document;
  //
  // return document.getElementById();
};

module.exports = {
  parseRawData
};
