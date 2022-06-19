"use strict";
const { load, html } = require("cheerio");
const { JSDOM } = require("jsdom");
const { parse } = require("node-html-parser");

/**
 * @param {string} rawText - A string that represent the body or total html of a page
 * @returns {Promise<void>}
 */
const parseRawData = async (rawText) => {
  const rootHtml = parse(rawText);

  console.log(rootHtml.getElementById("ded").innerHTML);
};

module.exports = {
  parseRawData
};
