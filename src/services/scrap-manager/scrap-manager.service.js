"use strict";
const fetch = require("node-fetch");

/**
 * @param {string} target
 * @returns {Promise<string|null|undefined>}
 */
const getRawDataFromEvent = async (target) => {
  try {
    const data = await fetch(target);
    return await data.text();
  } catch(err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  getRawDataFromEvent
};
